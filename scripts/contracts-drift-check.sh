#!/usr/bin/env bash
set -euo pipefail

echo "🔍 Checking for contracts drift..."

# Save current state of generated files
OPENAPI_FILE="packages/shared/src/openapi.json"
TYPES_FILE="apps/web/lib/api-types.d.ts"

if [ ! -f "$OPENAPI_FILE" ]; then
  echo "❌ $OPENAPI_FILE not found. Run 'pnpm contracts:generate' first."
  exit 1
fi

if [ ! -f "$TYPES_FILE" ]; then
  echo "❌ $TYPES_FILE not found. Run 'pnpm contracts:generate' first."
  exit 1
fi

# Snapshot current files
OPENAPI_BEFORE=$(cat "$OPENAPI_FILE")
TYPES_BEFORE=$(cat "$TYPES_FILE")

# Regenerate
pnpm --filter=@preflo/api contracts:extract --silent 2>/dev/null
pnpm --filter=@preflo/web contracts:types --silent 2>/dev/null

# Compare
OPENAPI_AFTER=$(cat "$OPENAPI_FILE")
TYPES_AFTER=$(cat "$TYPES_FILE")

DRIFT=0

if [ "$OPENAPI_BEFORE" != "$OPENAPI_AFTER" ]; then
  echo "❌ OpenAPI spec is out of date: $OPENAPI_FILE"
  DRIFT=1
fi

if [ "$TYPES_BEFORE" != "$TYPES_AFTER" ]; then
  echo "❌ API types are out of date: $TYPES_FILE"
  DRIFT=1
fi

if [ "$DRIFT" -eq 1 ]; then
  echo ""
  echo "Contracts have drifted. Run 'pnpm contracts:generate' and commit the changes."
  exit 1
fi

echo "✅ Contracts are up to date."
