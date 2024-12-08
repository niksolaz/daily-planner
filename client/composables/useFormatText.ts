import type { TText } from '~/types'

export function useFormatText(text: TText): string {
  if (typeof text !== 'string' && typeof text !== 'number') {
    throw new Error('Invalid type')
  }
  
  return String(text).toLowerCase()
}