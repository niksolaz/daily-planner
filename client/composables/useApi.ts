export const useApi = (headers: any = null) => {
  return {
    GET: async (url: string) => {
      const response =  await fetch(url, {
        method: 'GET'
      })
      const data = await response.json()
      return data
    },
    POST: async (url: string, body: any) => {
      const response =  await fetch(url, {
        method: 'POST',
        headers,
        body
      })
      const data = await response.json()
      return data
    },
    PATCH: async (url: string, body: any) => {
      const response =  await fetch(url, {
        method: 'PATCH',
        headers,
        body
      })
      const data = await response.json()
      return data
    },
    DELETE: async (url: string, headers: any) => {
      const response =  await fetch(url, {
        method: 'DELETE'
      })
      const data = await response.json()
      return data
    },
  }
}