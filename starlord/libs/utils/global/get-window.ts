import { typeCast } from './typecast';

export function getWindow<T = Window & typeof globalThis>(): T | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }
  return typeCast<T>(window);
}
