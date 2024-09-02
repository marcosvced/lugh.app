import type { DataException } from '@/lib/core/utils/DataException'

export enum GenericException {
  UNEXPECTED = 'UnexpectedException',
}

export function UnexpectedException(): DataException {
  return {
    kind: GenericException.UNEXPECTED,
    error: new Error('🚨 Something went wrong.'),
  }
}

export interface HandlerException {
  handlerException: (exception: DataException) => void
}
