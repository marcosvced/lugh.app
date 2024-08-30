import type { ApiResponse } from '@/lib/core/api/domain/entities/ApiResponse'
import type { Api } from '@/lib/core/api/domain/ports/Api'
import { useFetch } from '@/lib/tools/useFetch'

export class ApiClient implements Api {
  private readonly baseUrl: string = import.meta.env.VITE_APP_API_URL
  constructor() {
  }

  delete<T>({ url, params }: { url: string, params?: any }): Promise<ApiResponse<T>> {
    return useFetch(`${this.baseUrl}${url}`, { method: 'DELETE', params })
  }

  get<T>({ url, params }: { url: string, params?: any }): Promise<ApiResponse<T>> {
    return useFetch(`${this.baseUrl}${url}`, { method: 'GET', params })
  }

  post<T>({ url, payload }: { url: string, params?: any, payload?: any }): Promise<ApiResponse<T>> {
    return useFetch(`${this.baseUrl}${url}`, { method: 'POST', body: payload })
  }

  update<T>({ url, payload }: { url: string, params?: any, payload?: any }): Promise<ApiResponse<T>> {
    return useFetch(`${this.baseUrl}${url}`, { method: 'PUT', body: payload })
  }
}
