# @delhimart/docs

DelhiMart OS documentation powered by [Mintlify](https://mintlify.com).

## Running Locally

Install Mintlify CLI globally:

```bash
npm i -g mintlify
```

Run the documentation site:

```bash
pnpm --filter @delhimart/docs dev
# or from docs folder:
cd docs && mintlify dev
```

The docs will be available at `http://localhost:3000`.

## Content

- **Introduction**: Overview of DelhiMart OS
- **Getting Started**: Local setup, running API + Web, verification steps
- **API Reference**: `/health` endpoint documentation

## Structure

```
docs/
├── mint.json              # Mintlify configuration
├── introduction.mdx       # Landing page
├── getting-started.mdx    # Setup guide
└── api-reference/
    └── health.mdx         # Health endpoint docs
```

Implemented in [INN-23](https://linear.app/ixix/issue/INN-23) via subtasks INN-28/29/30.
