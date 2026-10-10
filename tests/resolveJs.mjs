// Resolve the app's extensionless relative JavaScript imports in Node's test runner.
export async function resolve(specifier, context, next) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) return next(`${specifier}.js`, context)
  return next(specifier, context)
}
