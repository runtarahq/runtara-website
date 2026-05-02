---
title: "Troubleshooting"
description: "Diagnose common Runtara Platform workflow, trigger, report, connection, and file issues."
section: "Runtara Platform"
order: 12
product: "runtara-platform"
tags: ["runtara-platform","troubleshooting"]
---
# Troubleshooting

Use this page when a workflow, trigger, report, connection, or data screen does not behave as expected.

## Workflow Has Problems

Symptoms:

- The Problems panel shows validation errors.
- The workflow cannot run.
- A trigger starts the workflow, but execution fails immediately.

Checks:

1. Open the workflow editor.
2. Review the Problems tab.
3. Open each step mentioned by validation.
4. Confirm required input mappings, connections, and child workflows.
5. Save and run the workflow manually before relying on a trigger.

## Trigger Does Not Start a Workflow

Symptoms:

- No execution appears in Invocation History.
- An external caller receives an error.
- A scheduled run does not appear at the expected time.

Checks:

1. Confirm the trigger is Active.
2. Confirm it points to the intended workflow.
3. Confirm the workflow validates.
4. For HTTP triggers, confirm the endpoint and request payload.
5. For scheduled triggers, confirm the schedule and timezone expectation.
6. For channel triggers, confirm the connection is configured.

## Report Does Not Render

Symptoms:

- Report page is empty or shows an error.
- A chart has no data.
- A report editor block references a missing field.

Checks:

1. Confirm the report source schema exists in Database.
2. Confirm each block field exists on that object type.
3. Confirm the object type has records.
4. Refresh the report viewer.
5. If Explore is empty, check whether the report exposes semantic datasets.

## Charts Look Flat or Unexpected

Symptoms:

- Charts show perfectly uniform bars.
- Pie slices are nearly identical.
- Reports do not surface meaningful outliers.

Checks:

1. Inspect the underlying object records.
2. Confirm category, quantity, price, status, and date fields have realistic variation.
3. Confirm the report is grouping and aggregating the intended fields.
4. Refresh the report after updating source data.

## Connection Fails

Symptoms:

- Provider calls fail inside workflow executions.
- Request volume appears high on a connection card.
- Rate-limit analytics show throttling.

Checks:

1. Open Connections and verify the connection exists.
2. Confirm the workflow step or trigger uses the intended connection.
3. Confirm the provider configuration is current.
4. Review Analytics > Rate Limits.
5. Retry with a small manual workflow run.

## File Is Missing

Symptoms:

- A workflow output file does not appear.
- Import or export fails.
- A file reference cannot be opened.

Checks:

1. Confirm default file storage is configured.
2. Open the workflow run in Invocation History and inspect the step that should create the file.
3. Check Files for the expected output.
4. Confirm the workflow passed a file reference instead of raw content when required.
