import { CustomException } from '@/lib/core/utils/exceptions/CustomException'

export function useLocaleTime(date: Date) {
  if (!(date instanceof Date)) {
    throw CustomException(new Error('The date parameter isn\'t a instansof Date 📆'))
  }
  const format = { hour: '2-digit', minute: '2-digit' }
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return date.toLocaleTimeString(navigator.language, format)
}
