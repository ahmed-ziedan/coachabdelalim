#!/usr/bin/env tsx
/**
 * CLI script for content validation.
 * Usage: tsx src/lib/validate-content-cli.ts [--mode development|production]
 */

import { runValidation, type ValidationMode } from './content-validation';

const args = process.argv.slice(2);
let mode: ValidationMode = 'development';

const modeIdx = args.indexOf('--mode');
if (modeIdx !== -1 && args[modeIdx + 1]) {
  const requestedMode = args[modeIdx + 1];
  if (requestedMode === 'production' || requestedMode === 'development') {
    mode = requestedMode;
  } else {
    console.error(`Invalid mode: "${requestedMode}". Use "development" or "production".`);
    process.exit(1);
  }
}

console.log(`Running content validation in ${mode} mode...`);
const passed = runValidation(mode);

if (!passed) {
  process.exit(1);
}
