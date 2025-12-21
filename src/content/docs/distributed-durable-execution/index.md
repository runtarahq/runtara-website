---
title: Introduction
description: Scale durable execution across multiple nodes and regions.
section: Distributed Durable Execution
order: 1
---

# Distributed Durable Execution

Distributed durable execution extends the guarantees of durable execution across multiple nodes, processes, and geographic regions.

## Overview

While [durable execution](/docs/durable-execution) ensures your code survives failures on a single node, distributed durable execution coordinates execution across your entire infrastructure:

- **Multi-node coordination** - Distribute work across multiple machines
- **Geographic distribution** - Run closer to your users with edge execution
- **Horizontal scaling** - Scale execution capacity by adding nodes
- **Fault tolerance** - Survive node failures without losing progress

## Key Concepts

### Execution Affinity

Control where specific executions run based on data locality, compliance requirements, or performance needs.

### State Synchronization

Execution state is automatically synchronized across nodes, enabling seamless handoffs and failovers.

### Distributed Checkpoints

Checkpoints are replicated to ensure durability even when nodes fail.

## Coming Soon

Detailed documentation for distributed durable execution is coming soon. This section will cover:

- Setting up a distributed Runtara cluster
- Configuring execution affinity and routing
- Managing state across nodes
- Monitoring distributed executions
- Best practices for multi-region deployments
