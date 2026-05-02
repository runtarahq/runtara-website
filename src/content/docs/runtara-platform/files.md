---
title: "Files"
description: "Browse and manage files created or used by Runtara workflow runs."
section: "Runtara Platform"
order: 8
product: "runtara-platform"
tags: ["runtara-platform","files"]
---
# Files

The Files area shows files available to the organization. Files can come from uploads, generated workflow outputs, imports, exports, or configured storage connections.

## Use Files

Open Files from the sidebar to browse stored assets. A file may be used as:

- Input to a workflow.
- Output from a workflow run.
- Imported data for an object type.
- Exported data for review outside Runtara.
- Supporting material referenced by an operator.

## Storage Connections

File behavior depends on configured storage connections. The demo organization includes a default S3-compatible storage connection. See [Connections](/docs/runtara-platform/connections) for how default file storage is managed.

## File References in Workflows

Workflow steps can pass file references instead of copying file contents. This is useful when a workflow works with large files or when the same file should be reused by multiple steps.

## Good Practices

- Use clear file names for manual uploads.
- Prefer generated exports for audit-friendly handoffs.
- Keep default file storage configured before enabling workflows that create files.
- Check workflow execution history when an expected output file is missing.
