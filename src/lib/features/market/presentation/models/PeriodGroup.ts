import type { Period } from '@/lib/features/market/presentation/models/Period'

export type PeriodGroup = { [key in 'night' | 'morning' | 'afternoon']: Period }
