# Property Management Module

Shared types, schema definitions, and Zod validators for real-estate and property-management operations in the Arpeggio platform.

Consumed by **maestro** (API + database) and **sinfonia** (sales, leasing, and operations UI).

Enable at runtime via `ENABLED_MODULES` (maestro) or `VITE_ENABLED_MODULES` (sinfonia). Add `propertyManagement` to the module list.

## Scope

End-to-end real estate: projects, buildings, units, sales pipelines, reservations, payment plans, leasing, construction tracking, commissions, and reporting.

## Directory layout

```
propertyManagement/
├── api/realEstate/private/<resource>/
└── helpers/static/
    ├── exceptions/
    └── zod/
```

## API domains

### Portfolio structure

| Resource | Description |
|----------|-------------|
| `project` | Development projects / sites |
| `edifice` | Buildings within a project |
| `floor` | Floors within an edifice |
| `unitType` / `unitTypeCategory` | Unit typologies and categories |
| `unit` | Individual sellable/rentable units |
| `unitCost` | Cost tracking per unit |
| `constructor` | Construction companies / contractors |

### Sales & reservations

| Resource | Description |
|----------|-------------|
| `reservation` | Unit reservations |
| `sale` | Sales contracts and approval flows |
| `paymentPlan` | Installment / payment schedules |
| `commission` | Agent and broker commissions |
| `lead` | Sales leads |

### Leasing & operations

| Resource | Description |
|----------|-------------|
| `lease` | Rental agreements |
| `rentalPayment` | Rent payment records |
| `rentalsHub` | Rental operations hub views |
| `contractsHub` | Contract management hub views |

### Construction & quality

| Resource | Description |
|----------|-------------|
| `constructionUpdate` | Build progress updates |
| `snag` | Defect / snag tracking |
| `inspection` | Unit inspections |
| `modificationRequest` | Buyer-requested unit modifications |

### Reporting & integrations

| Resource | Description |
|----------|-------------|
| `dashboard` / `groupDashboard` | Analytics dashboards |
| `agentReport` | Agent performance reporting |
| `roi` | Return-on-investment calculations |
| `erpExport` | ERP system export payloads |

## File conventions

Follows the standard Armonia resource layout (see [core README](../../../README.md)):

- `*.dto.ts` — unit, sale, lease, and related document types
- `*.schema-def.ts` — field definitions for create/edit flows
- `*.form.validator.ts` — Zod schemas with localized messages
- Nested folders under `unit/` group reservation, sale, payment plan, inspection, and modification request resources

## Example import

```ts
import {UnitSchemaDef} from "armonia/src/modules/propertyManagement/api/realEstate/private/unit/unit/unit.schema-def";
import type {Unit} from "armonia/src/modules/propertyManagement/api/realEstate/private/unit/unit/unit.dto";
import {createSaleFormSchema} from "armonia/src/modules/propertyManagement/api/realEstate/private/unit/sale/createSale.form.validator";
```

## Backend counterpart

Mongoose schemas, actions, and HTTP routes: `maestro/modules/propertyManagement/`. Models are registered in `maestro/modules/propertyManagement/database/moduleBootstrap.ts`.

## Frontend counterpart

Panel routes, view configs, and widgets: `sinfonia/src/modules/propertyManagement/`.
