# UI/UX Specifications: DelhiMart OS (MVP Slice)

**Source of Truth:** [Notion Spec](https://www.notion.so/2d85b82eaa2f8073a8f7e3bb3ba3ac73)

## Information Architecture (IA)
- **Route**: `/` (Home)
- **Layout**: Centered single-card layout. Minimal visual noise. Focus purely on system status.

## Component: `HealthStatusCard`

### 1. Loading State
- **Visual**: Spinner or pulsing dot (neutral color).
- **Copy**: `Connecting to DelhiMart OS...`

### 2. Success State
- **Visual**: Green Status Indicator (✅ icon or green dot).
- **Headline**: `DelhiMart OS: OK`
- **Subtext**: `Marketplace operations system is online.`

### 3. Error State
- **Visual**: Red Status Indicator (⚠️ icon or red dot).
- **Headline**: `System Offline`
- **Subtext**: `Could not reach backend health service. Ensure apps/api is running.`
- **Action**: `[Retry Connection]` (Primary Button) — re-triggers `/health` fetch.

## Styling Guidance
- **Typography**: System Sans-Serif. Clean, readable.
- **Palette**:
  - **Background**: Light gray / Neutral.
  - **Card**: White + subtle shadow.
  - **Status Colors**: Standard Success Green / Error Red.
