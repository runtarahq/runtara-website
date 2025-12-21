---
title: Tutorial
description: A step-by-step tutorial for using Runtara to create durable programs.
section: Durable Execution
order: 2
---

# Tutorial

This tutorial walks you through adding durability to your code with Runtara.

## Understanding the Problem

Let's start with a simple HTTP request. Even for basic functionality, you need to handle errors, timeouts, and rate limiting. Without this handling, your code works—until it doesn't. Eventually, an edge case will cause a failure.

```rust
// Without durability: fragile code that will eventually fail
// While the example is completely artificial, it represents interaction with any external systems. Coefficient may vary!
async fn fetch_data() -> Result<String, Box<dyn std::error::Error>> {
    if rand::thread_rng().gen_bool(0.3) {
        println!("Error!");
        return Err("Random failure".into());
    }

    let response = "Hello, world".into(); 
    Ok(response)
}
```

The interesting thing about edge cases is that while they differ between systems, the common thread is simple: you want the happy path to complete successfully. Everything else is a byproduct.

## Adding Durability with Runtara

With Runtara, you annotate your code with the `durable` macro and also add idempotency key as the first parameter:

```rust
use runtara::durable;

#[durable]
async fn fetch_data(idempotency_key: &str) -> Result<String, Box<dyn std::error::Error>> {
    if rand::thread_rng().gen_bool(0.3) {
        println!("Error!");
        return Err("Random failure".into());
    }

    let response = "Hello, world".into(); 
    Ok(response)
}
```

The key difference is the `idempotency_key` parameter. This ensures that:

- Retries don't execute the same operation multiple times
- Results can be cached for efficiency, especially useful for large data transfers

## Configuring Retry Behavior

By default, Runtara will retry 3 times, with exponential backoff strategy starting with 1 second delay. This behavior can be customized by configuring the `#[durable]` macro:

```rust
#[durable(max_retries = 5, delay = 100)]
async fn fetch_data(key: &str) -> Result<String, Box<dyn std::error::Error>> {
    if rand::thread_rng().gen_bool(0.3) {
        println!("Error!");
        return Err("chaos: random failure".into());
    }

    let response = "Hello, world".into(); 
    Ok(response)
}
```

In the example above, there will be 5 retries with the initial delay of 100ms.

## What Happens Under the Hood

When you use the `#[durable]` macro, Runtara:

1. **Wraps your function** with retry and checkpointing logic
2. **Tracks execution state** so it can resume after failures
3. **Caches results** based on the idempotency key
4. **Handles retries** with exponential backoff

Your code stays clean while Runtara handles the complexity of distributed systems.

## Next Steps

- Learn about [Distributed Durable Execution](/docs/distributed-durable-execution) for multi-node scenarios
- Explore [Durable Workflows](/docs/durable-workflows) for complex multi-step processes
