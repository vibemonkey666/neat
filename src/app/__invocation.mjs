// Generated source-mode invocation support.
import { isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

function currentContext() {
  return { standalone: globalThis.Bun?.isStandaloneExecutable,
    execPath: process.execPath, argv: process.argv, helperUrl: import.meta.url };
}
export function isSourceMode(standalone = globalThis.Bun?.isStandaloneExecutable) {
  return standalone === false;
}
export function cliPrefix(context = currentContext()) {
  if (!isSourceMode(context.standalone)) return [];
  const script = context.argv?.[1];
  if (typeof script !== 'string' || !isAbsolute(script))
    throw Error('Reconstructed self-launch requires an absolute CLI script path');
  return [script];
}
export function programPath(context = currentContext()) {
  if (!isSourceMode(context.standalone)) return context.execPath;
  return fileURLToPath(new URL('../bin/claude-reconstructed', context.helperUrl ?? import.meta.url));
}
export function servicePrefix(nativeLauncher, context = currentContext()) {
  return isSourceMode(context.standalone)
    ? [context.execPath, ...cliPrefix(context)] : [nativeLauncher];
}
