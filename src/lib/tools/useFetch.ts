import { ResponseStatus } from '@/lib/core/api/domain/entities/ResponseStatus'
import type { ApiResponse } from '@/lib/core/api/domain/entities/ApiResponse'
import { useEither } from '@/lib/tools/useEither'

export async function useFetch<T>(url: RequestInfo | URL, options = {}): Promise<ApiResponse<T>> {
  try {
    const response = await (await fetch(url, options)).json()
    return useEither.right({
      status: ResponseStatus.OK,
      response: <T>{ ...response },
    })
  }
  catch (error) {
    return useEither.left({
      status: error.statusCode,
      message: error.message,
    })
  }
}
