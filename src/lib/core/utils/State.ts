import type { DataException } from '@/lib/core/utils/DataException'

export interface State<S> {
  isLoading: boolean
  errors: DataException[]
  data: S
}
