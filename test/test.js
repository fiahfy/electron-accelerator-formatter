import formatter from '../src'

describe('darwin', () => {
  beforeAll(() => {
    Object.defineProperty(process, 'platform', {
      value: 'darwin'
    })
  })

  test('equal', () => {
    expect(formatter('CmdOrCtrl+A')).toBe('⌘A')
  })
})

describe('win32', () => {
  beforeAll(() => {
    Object.defineProperty(process, 'platform', {
      value: 'win32'
    })
  })

  test('equal', () => {
    expect(formatter('CmdOrCtrl+A')).toBe('Ctrl+A')
  })
})
