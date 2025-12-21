---
title: Introduction
description: Build complex multi-step workflows with guaranteed completion.
section: Durable Workflows
order: 1
---

# Durable Workflows

Durable workflows orchestrate multiple durable functions into complex, long-running processes with guaranteed completion.

## Overview

While [durable execution](/docs/durable-execution) makes individual functions resilient, durable workflows coordinate multiple steps into cohesive processes:

- **Multi-step orchestration** - Chain multiple durable functions together
- **Long-running processes** - Workflows that span hours, days, or weeks
- **Conditional logic** - Branch based on results from previous steps
- **Parallel execution** - Run independent steps concurrently

## Use Cases

### Order Processing

Coordinate payment processing, inventory updates, and shipping notifications into a single reliable workflow.

### Data Pipelines

Build ETL pipelines that survive failures and resume from the last successful step.

### User Onboarding

Orchestrate welcome emails, account setup, and verification flows with guaranteed delivery.

### Background Jobs

Run complex background tasks that must complete, even if they take hours or days.

## Key Concepts

### Workflow Definition

Define your workflow as a series of steps, each wrapping a durable function.

### State Management

Workflow state is automatically persisted and restored across failures.

### Compensation

Define rollback logic for when workflows need to undo completed steps.

## Coming Soon

Detailed documentation for durable workflows is coming soon. This section will cover:

- Defining and composing workflows
- Managing workflow state
- Error handling and compensation
- Testing workflows
- Monitoring long-running workflows
