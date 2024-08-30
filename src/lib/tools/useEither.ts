import { Either } from '@/lib/core/utils/Either'

export const useEither = {
  left: <L, R>(value: L): Either<L, R> => new Either<L, R>({ kind: 'left', leftValue: value }),
  right: <L, R>(value: R): Either<L, R> => new Either<L, R>({ kind: 'right', rightValue: value }),
}
