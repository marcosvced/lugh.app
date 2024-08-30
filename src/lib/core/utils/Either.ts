interface Left<L> {
  kind: 'left'
  leftValue: L
}

interface Right<R> {
  kind: 'right'
  rightValue: R
}

type EitherValue<L, R> = Left<L> | Right<R>

export class Either<L, R> {
  constructor(private readonly value: EitherValue<L, R>) {
  }

  isLeft(): boolean {
    return this.value.kind === 'left'
  }

  isRight(): boolean {
    return this.value.kind === 'right'
  }

  fold<T>(leftFn: (left: L) => T, rightFn: (right: R) => T): T {
    switch (this.value.kind) {
      case 'left':
        return leftFn(this.value.leftValue)
      case 'right':
        return rightFn(this.value.rightValue)
    }
  }

  get(errorMessage?: string): R {
    return this.getOrThrow(errorMessage)
  }

  getOrThrow(errorMessage?: string): R {
    const throwFn = () => {
      throw new Error(
        errorMessage || `An error has occurred retrieving value: ${JSON.stringify(this.value)}`,
      )
    }

    return this.fold<R>(() => throwFn(), rightValue => rightValue)
  }

  getLeft(): L {
    const throwFn = () => {
      throw new Error(`The value is right: ${JSON.stringify(this.value)}`)
    }

    return this.fold(leftValue => leftValue, () => throwFn())
  }

  getOrElse(defaultValue: R): R {
    return this.fold(
      () => defaultValue,
      someValue => someValue,
    )
  }
}
