---
title: "Connections"
description: "Configure reusable provider credentials, file storage, and shared integrations."
section: "Runtara Platform"
order: 5
product: "runtara-platform"
tags: ["runtara-platform","connections","integrations"]
---
# Connections

Connections store reusable integration configuration for workflows, triggers, file storage, and provider calls. They keep credentials and provider settings out of workflow step definitions.

![Connections list](/docs/runtara-platform/images/connections-list.png)

## Connection Catalog

Open Connections from the sidebar to view configured integrations. Each card shows the provider type, connection name, category, and recent request activity.

The example organization shown in this guide includes:

- OpenAI Demo Key
- Shopify Demo Store
- Slack Support Alerts
- Demo S3 File Storage
- AWS Bedrock Demo Credentials

## Create a Connection

Use New connection, choose a provider type, then complete the provider-specific form. Required fields vary by provider.

Use descriptive names. A connection named Slack Support Alerts is easier to choose in a trigger than a generic name such as test-slack.

## Default File Storage

One file-storage connection can be marked as the default storage target. Workflows that create or upload files use this connection when they do not specify a more specific storage destination.

## Rate Limits and Usage

Connection cards show recent request counts. Rate-limit configuration is provider-specific and may also appear in Analytics under Rate Limits.

## Operational Practices

- Use names that describe the business purpose of the integration.
- Use separate connections when workloads have different permissions, owners, or rate-limit needs.
- Review recent request activity before changing a connection used by active workflows.
- Choose the default file-storage connection intentionally, because workflows can rely on it when no storage target is specified.
