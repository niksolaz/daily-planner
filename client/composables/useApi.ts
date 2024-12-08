export const useApi = (headers: Record<string, string> | null = null) => {
  return {
    GET: async (url: string) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers || undefined
        })
        const data = await response.json()
        return data
      } catch (error) {
        console.error(error)
      }
    },
    POST: async (url: string, body: Record<string, unknown>) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers || undefined,
        body: JSON.stringify(body)
      })
      const data = await response.json()
      return data
    },
    PATCH: async (url: string, body: Record<string, unknown>) => {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: headers || undefined,
        body: JSON.stringify(body)
      })
      const data = await response.json()
      return data
    },
    DELETE: async (url: string) => {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: headers || undefined
      })
      const data = await response.json()
      return data
    },
  }
}