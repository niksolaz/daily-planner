import { expect, test } from 'vitest'
import { useFormatText } from './useFormatText'

const proofTest = {
  string: {
    key: 'CASA',
    result: 'casa'
  },
  number: {
    key: 3,
    result: '3'
  },
  object: {
    key: {},
    result: 'Invalid type'
  },
  bool: {
    key: true,
    result: 'Invalid type'
  },
  array: {
    key: [],
    result: 'Invalid type'
  },
  Null: {
    key: null,
    result: 'Invalid type'
  },
  Undefined: {
    key: undefined,
    result: 'Invalid type'
  }
}

test('format text in lower case', () => {
  // from CASA to casa
  expect(useFormatText(proofTest.string.key)).toBe(proofTest.string.result)
})


test('format number into text lower case', () => {
  // from 3 to '3'
  expect(useFormatText(proofTest.number.key)).toBe(proofTest.number.result)
})

test('if type is Object throw error invalid type', () => {
  // from {} to 'Invalid type'
  expect(() => useFormatText(proofTest.object.key)).toThrowError(proofTest.object.result)
})

test('if type is Boolean throw error invalid type', () => {
  // from true to 'Invalid type'
  expect(() => useFormatText(proofTest.bool.key)).toThrowError(proofTest.bool.result)
})

test('if type is array throw error invalid type', () => {
  // from [] to 'Invalid type'
  expect(() => useFormatText(proofTest.array.key)).toThrowError(proofTest.array.result)
})

test('if type is Null throw error invalid type', () => {
  // from null to 'Invalid type'
  expect(() => useFormatText(proofTest.Null.key)).toThrowError(proofTest.Null.result)
})

test('if type is Undefined throw error invalid type', () => {
  // from undefined to 'Invalid type'
  expect(() => useFormatText(proofTest.Undefined.key)).toThrow(proofTest.Undefined.result)
})