export function getLocalStorage(): Storage | undefined {
  if (typeof localStorage === 'undefined') {
    return undefined;
  }
  return localStorage;
}
