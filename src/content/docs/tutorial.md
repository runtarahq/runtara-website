---
title: Tutorial
description: A step-by-step tutorial for using Runtara to create durable programs.
section: Getting Started
order: 1
---

## The Problem with Distributed Systems

Software development used to be simpler. You wrote code, added basic error handling, and it worked. But as systems became distributed and integrated with third-party services, a new challenge emerged: handling edge cases reliably.

Consider what happens when an external service is unavailable—perhaps it's overloaded or rate-limiting requests. You need to retry. You need to retry *later*. This means extending your code with guards, checks, and conditionals that have nothing to do with your actual business logic. They're workarounds for the inherent unreliability of distributed systems.

This turns software development into a tedious process where the happy path gets buried under defensive code.

## A Better Approach: Durable Execution

Instead of polluting your code with protective checks, you can use a **durable execution engine**. This external system ensures that:

- Your code retries automatically when needed
- If execution interrupts, it continues exactly where it stopped
- Your codebase stays clean and focused on business logic

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

By default, Runtara will retry 3 times, with exponential backoff strategy starting with 1 second delay. This behavior can be customized, by configuring the `#durable` macro:

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

In example above, there will be 5 retries with the initial delay of 100ms.
