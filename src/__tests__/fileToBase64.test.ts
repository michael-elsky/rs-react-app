import { describe, expect, it } from 'vitest'
import fileToBase64 from '../utils/fileToBase64'

describe('fileToBase64', () => {
  it('converts file to base64', async () => {
    const file = new File(['test'], 'test.png', { type: 'image/png' })

    const result = await fileToBase64(file)

    expect(result).toContain('data:image/png;base64')
  })

  it('rejects on error', async () => {
    const badInput = {} as File

    await expect(fileToBase64(badInput)).rejects.toBeTruthy()
  })
})
