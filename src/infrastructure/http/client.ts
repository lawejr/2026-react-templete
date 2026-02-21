const API_BASE_URL = import.meta.env.VITE_API_URL || ''

export const httpClient = {
  async get<TResponse>(
    path: string,
    init?: Parameters<typeof fetch>[1],
  ): Promise<TResponse> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return (await response.json()) as TResponse
  },
}
