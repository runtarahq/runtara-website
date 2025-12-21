---
title: Introduction
description: Learn about durable execution and how Runtara makes your code resilient to failures.
section: Durable Execution
order: 1
---

# Durable Execution

Durable execution is a programming model that ensures your code runs to completion, even in the face of failures, crashes, or infrastructure issues.

## The Problem with Distributed Systems

Software development used to be simpler. You wrote code, added basic error handling, and it worked. But as systems became distributed and integrated with third-party services, a new challenge emerged: handling edge cases reliably.

Consider what happens when an external service is unavailable—perhaps it's overloaded or rate-limiting requests. You need to retry. You need to retry *later*. This means extending your code with guards, checks, and conditionals that have nothing to do with your actual business logic. They're workarounds for the inherent unreliability of distributed systems.

This turns software development into a tedious process where the happy path gets buried under defensive code.

## A Better Approach: Durable Execution

Instead of polluting your code with protective checks, you can use a **durable execution engine**. This external system ensures that:

- Your code retries automatically when needed
- If execution interrupts, it continues exactly where it stopped
- Your codebase stays clean and focused on business logic

## How Runtara Implements Durable Execution

Runtara provides durable execution through:

- **Checkpointing** - Execution state is automatically saved at key points
- **Automatic retries** - Failed operations retry with configurable backoff
- **Deterministic replay** - Executions can be replayed from any checkpoint
- **Idempotency** - Operations are safely retryable without side effects

## Next Steps

- [Tutorial](/docs/durable-execution/tutorial) - A hands-on guide to adding durability to your code
