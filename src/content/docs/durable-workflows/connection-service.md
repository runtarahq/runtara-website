---
title: Connection Service
description: Explains Connection Service contract.
section: Durable Workflows
order: 2
---

> Alpha version: this component is under active development and can be unstable.
# Connection Service

The Connection Service is an external component that provides secure credential management and rate limiting for Runtara workflows. It acts as a centralized vault that workflows query at runtime to obtain connection credentials.

## Overview

```
┌─────────────────────┐         ┌─────────────────────┐
│   Runtara Workflow  │  GET    │  Connection Service │
│                     │────────▶│                     │
│  - HTTP Agent       │         │  - Credentials      │
│  - SFTP Agent       │◀────────│  - Rate Limits      │
│  - Custom Agents    │         │  - Metadata         │
└─────────────────────┘         └─────────────────────┘
```

Workflows never store credentials directly. Instead, they reference connections by ID and fetch credentials on-demand from your Connection Service.

## Why Use a Connection Service?

- **Security**: Credentials are never embedded in workflow definitions or binaries
- **Centralized Management**: Update credentials in one place, all workflows pick up changes
- **Rate Limit Coordination**: Prevent workflows from exceeding API limits across your entire system
- **Audit Trail**: Track which workflows access which connections
- **Multi-tenancy**: Isolate credentials per tenant

## Configuration

Set the Connection Service URL when running Runtara Environment:

```bash
export RUNTARA_CONNECTION_SERVICE_URL=https://connections.example.com
```

This URL is passed to workflow instances, which use it to fetch connections at runtime.

## API Contract

The Connection Service must implement a single endpoint:

```
GET /{tenant_id}/{connection_id}
```

### Request

| Parameter | Location | Description |
|-----------|----------|-------------|
| `tenant_id` | path | Tenant identifier |
| `connection_id` | path | Connection identifier |

### Response

```json
{
  "parameters": { ... },
  "integration_id": "http_bearer",
  "connection_subtype": "oauth2",
  "rate_limit": {
    "is_limited": false,
    "remaining": 100,
    "reset_at": 1735900800,
    "retry_after_ms": null
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `parameters` | object | Yes | Opaque credentials object, interpreted by agents |
| `integration_id` | string | Yes | Connection type (e.g., `http_bearer`, `sftp`) |
| `connection_subtype` | string | No | Optional subtype for classification |
| `rate_limit` | object | No | Current rate limit state |

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| `200` | Connection found |
| `404` | Connection not found |
| `429` | Connection Service itself is rate limited (include `Retry-After` header) |

## Rate Limiting

The Connection Service controls when workflows can make external API calls through the `rate_limit` object.

### How It Works

1. Workflow fetches connection before making an API call
2. If `rate_limit.is_limited` is `true`, workflow **waits** (durable sleep)
3. After waiting, workflow re-fetches connection to check updated state
4. Only proceeds when `is_limited` is `false`

```
┌─────────────────────────────┐       ┌─────────────────────────────┐
│      Runtara Workflow       │       │     Connection Service      │
│                             │  GET  │                             │
│  ┌─────────────────────┐    │──────▶│    ┌─────────────────┐      │
│  │     HTTP Agent      │    │       │    │   Credentials   │      │
│  └─────────────────────┘    │       │    └─────────────────┘      │
│  ┌─────────────────────┐    │◀──────│    ┌─────────────────┐      │
│  │     SFTP Agent      │    │       │    │   Rate Limits   │      │
│  └─────────────────────┘    │       │    └─────────────────┘      │
│  ┌─────────────────────┐    │       │    ┌─────────────────┐      │
│  │    Custom Agents    │    │       │    │    Metadata     │      │
│  └─────────────────────┘    │       │    └─────────────────┘      │
└─────────────────────────────┘       └─────────────────────────────┘
```

### Rate Limit Fields

| Field | Type | Description |
|-------|------|-------------|
| `is_limited` | boolean | Whether calls should be blocked |
| `remaining` | integer | Remaining requests in window (informational) |
| `reset_at` | integer | Unix timestamp when limit resets |
| `retry_after_ms` | integer | Milliseconds to wait (takes precedence) |

### Wait Duration Priority

Runtara calculates wait time using this priority:

1. `retry_after_ms` if present (most precise)
2. `reset_at - current_time` if `reset_at` is in the future
3. Default 60 seconds fallback

### Pre-emptive Model

This is a **pre-emptive** rate limiting model:

- The Connection Service is the **sole source of truth** for rate limits
- Workflows trust the service and don't make calls when limited
- The service must track rate limits (from configuration or by proxying requests)

> **Note**: Runtara does not currently report observed rate limits (e.g., 429 responses from external APIs) back to the Connection Service.

## Parameters by Integration Type

The `parameters` object is opaque to Runtara—agents interpret it based on `integration_id`. Here are common patterns:

### HTTP Bearer Token (`http_bearer`)

```json
{
  "parameters": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "base_url": "https://api.example.com"
  },
  "integration_id": "http_bearer"
}
```

### HTTP API Key (`http_api_key`)

```json
{
  "parameters": {
    "api_key": "sk-abc123...",
    "header_name": "X-API-Key",
    "base_url": "https://api.example.com"
  },
  "integration_id": "http_api_key"
}
```

### SFTP (`sftp`)

```json
{
  "parameters": {
    "host": "sftp.example.com",
    "port": 22,
    "username": "deploy",
    "password": "secret",
    "private_key": "-----BEGIN RSA PRIVATE KEY-----\n...",
    "passphrase": "key-passphrase"
  },
  "integration_id": "sftp"
}
```

### Custom Integration Types

You can define custom `integration_id` values for your own agents. The Connection Service returns whatever parameters your agent expects.

## OpenAPI Specification

```yaml
openapi: 3.1.0
info:
  title: Runtara Connection Service API
  version: 1.0.0

paths:
  /{tenant_id}/{connection_id}:
    get:
      operationId: getConnection
      parameters:
        - name: tenant_id
          in: path
          required: true
          schema:
            type: string
        - name: connection_id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Connection found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ConnectionResponse'
        '404':
          description: Connection not found
        '429':
          description: Rate limited
          headers:
            Retry-After:
              schema:
                type: integer

components:
  schemas:
    ConnectionResponse:
      type: object
      required:
        - parameters
        - integration_id
      properties:
        parameters:
          type: object
          additionalProperties: true
        integration_id:
          type: string
        connection_subtype:
          type: string
          nullable: true
        rate_limit:
          $ref: '#/components/schemas/RateLimitState'

    RateLimitState:
      type: object
      required:
        - is_limited
      properties:
        is_limited:
          type: boolean
        remaining:
          type: integer
          nullable: true
        reset_at:
          type: integer
          format: int64
          nullable: true
        retry_after_ms:
          type: integer
          format: int64
          nullable: true
```

## Implementation Considerations

### Caching

Workflows fetch connections on every use. Consider:

- Short TTL caching in your Connection Service
- Connection pooling for database lookups
- Redis or in-memory cache for hot paths

### High Availability

The Connection Service is on the critical path for workflows. Ensure:
- Multiple replicas behind a load balancer
- Health checks and automatic failover
- Graceful degradation (e.g., return cached credentials if backend is down)

### Security

- Use HTTPS in production
- Implement authentication (API keys, mTLS, or network-level isolation)
- Log access for audit trails
- Encrypt credentials at rest

### Rate Limit Tracking

Options for tracking rate limits:

1. **Configuration-based**: Define limits per connection (e.g., "100 req/min") and track locally
2. **Proxy-based**: Route all external calls through a proxy that observes actual limits
3. **Callback-based**: Future enhancement—workflows report observed 429s back to the service

## Example Implementation

A minimal Connection Service in Node.js:

```javascript
const express = require('express');
const app = express();

const connections = {
  'tenant-1': {
    'my-api': {
      parameters: { token: 'secret-token', base_url: 'https://api.example.com' },
      integration_id: 'http_bearer',
      rate_limit: { is_limited: false, remaining: 100 }
    }
  }
};

app.get('/:tenantId/:connectionId', (req, res) => {
  const { tenantId, connectionId } = req.params;
  const tenant = connections[tenantId];
  
  if (!tenant || !tenant[connectionId]) {
    return res.status(404).json({ error: 'Connection not found' });
  }
  
  res.json(tenant[connectionId]);
});

app.listen(3000);
```
