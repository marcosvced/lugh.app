import type { Amount } from '@/lib/core/amount/domain/entities/Amount'

export function useMoney(amount: Amount) {
  const locale = navigator?.language ?? 'es-ES'
  return new Intl.NumberFormat(locale, { style: 'currency', currency: amount.currency }).format(amount.value)
}
