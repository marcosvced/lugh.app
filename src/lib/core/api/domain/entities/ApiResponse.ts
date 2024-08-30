import type { ResponseStatus } from '@/lib/core/api/domain/entities/ResponseStatus'
import type { Either } from '@/lib/core/utils/Either'

interface Response {
  status: ResponseStatus
}

export interface ResponseError extends Response {
  message: string
}

export interface ResponseData<T> extends Response {
  response: T
}

export type ApiResponse<T> = Either<ResponseError, ResponseData<T>>
