import type { ApiResponse } from '@/lib/core/api/domain/entities/ApiResponse'

export interface Api {

  get: <T>({ url, params }: { url: string, params?: any }) => Promise<ApiResponse<T>>

  post: <T>({ url, params, payload }: { url: string, params?: any, payload?: any }) => Promise<ApiResponse<T>>

  update: <T>({ url, params, payload }: { url: string, params?: any, payload?: any }) => Promise<ApiResponse<T>>

  delete: <T>({ url, params }: { url: string, params?: any }) => Promise<ApiResponse<T>>
}
