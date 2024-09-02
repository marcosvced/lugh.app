import type { DataException } from '@/lib/core/utils/exceptions/DataException'

export interface State<S> {
  isLoading: boolean
  errors: DataException[]
  data: S
}
