import { TText } from '../../types'

export const useFormatText = (t: TText): string => {
  if (typeof t !== 'string' && typeof t !== 'number') {
    throw new Error('Invalid type')
  }
  if (typeof t === 'number') {
    return t.toString()
  }
  return t.toLowerCase()
}