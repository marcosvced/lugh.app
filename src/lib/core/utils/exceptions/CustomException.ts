import type { DataException } from '@/lib/core/utils/exceptions/DataException'
import { GenericException } from '@/lib/core/utils/exceptions/GenericException'

export function CustomException(error: Error): DataException {
  return {
    kind: GenericException.UNEXPECTED,
    error,
  }
}
