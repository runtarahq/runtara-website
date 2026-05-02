---
title: "Database"
description: "Manage object types and records used by Runtara workflows and reports."
section: "Runtara Platform"
order: 6
product: "runtara-platform"
tags: ["runtara-platform","database","records"]
---
# Database

The Database area manages object types and object records. Object data can feed reports, workflow steps, and operational review screens.

![Database object types](/docs/runtara-platform/images/database-schemas.png)

## Object Types

Open Database to see object types. Each object type defines fields and records for a business entity, such as catalog products, inventory snapshots, supplier mappings, warehouse stock, or knowledge articles.

Use Create object type when you need a new reusable data shape. Define fields carefully because reports and workflows can depend on field names.

## Object Records

Open an object type to manage its records.

![Catalog product records](/docs/runtara-platform/images/database-catalog-products.png)

Record screens support common data operations:

- Show Filters: narrow records by field values.
- Export CSV: download records for external review.
- Import CSV: load records from a CSV file.
- Bulk Insert: add multiple records at once.
- Row edit: open or edit an individual record.

## Using Data in Reports

Reports select an object type as the source schema for blocks. For example, Category Performance Breakdown uses CatalogProduct records to chart SKU count, inventory units, list-price totals, and average price by category.

When a report fails because of missing fields or missing schemas, check the object type first. The report source must match an existing object type, and the report block fields must exist on that type.

## Using Data in Workflows

Workflow steps can read, transform, or create object records. Use object data when a workflow needs stable business context, such as product metadata, supplier mappings, support articles, or warehouse stock.

## Good Practices

- Use stable field names once reports or workflows depend on them.
- Keep demo records realistic enough to expose meaningful charts and filters.
- Use imports for large updates instead of manual row creation.
- Confirm record freshness before using a table as an operational source of truth.
