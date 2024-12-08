import { useApi } from './useApi'
import { expect, test } from 'vitest'

// TODO: add tests for useApi GET method
test('useApi GET method', async () => {
  const api = useApi()
  const data = await api.GET('https://jsonplaceholder.typicode.com/posts')
  expect(data).toBeDefined()
})
// TODO: add tests for useApi GET method with id
test('useApi GET method', async () => {
  const api = useApi()
  const data = await api.GET('https://jsonplaceholder.typicode.com/posts/1')
  expect(data).toBeDefined()
})
// TODO: add tests for useApi POST method
test('useApi POST method', async () => {
  const api = useApi()
  const data = await api.POST('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
  })
  expect(data).toBeDefined()
})
// TODO: add tests for useApi PUT method
test('useApi PUT method', async () => {
  const api = useApi()
  const data = await api.PATCH('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'foo',
    body: 'bar',
    userId: 1
  })
  expect(data).toBeDefined()
})
// TODO: add tests for useApi DELETE method
test('useApi DELETE method', async () => {
  const api = useApi()
  const data = await api.DELETE('https://jsonplaceholder.typicode.com/posts/1')
  expect(data).toBeDefined()
})

