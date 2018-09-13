import formatter from '../lib'

describe('darwin', () => {
  beforeAll(() => {
    Object.defineProperty(process, 'platform', {
      value: 'darwin'
    })
  })

  test('Format', () => {
    expect(formatter('A')).toBe('A')
    expect(formatter('Plus')).toBe('+')
    expect(formatter('Space')).toBe('Space')
    expect(formatter('Tab')).toBe('⇥')
    expect(formatter('Backspace')).toBe('⌫')
    expect(formatter('Delete')).toBe('⌦')
    expect(formatter('Return')).toBe('↩')
    expect(formatter('Enter')).toBe('↩')
    expect(formatter('Up')).toBe('↑')
    expect(formatter('Down')).toBe('↓')
    expect(formatter('Left')).toBe('←')
    expect(formatter('Right')).toBe('→')
    expect(formatter('PageUp')).toBe('⇞')
    expect(formatter('PageDown')).toBe('⇟')
    expect(formatter('Escape')).toBe('⎋')
    expect(formatter('Esc')).toBe('⎋')
  })

  test('Alias', () => {
    expect(formatter('Cmd+A')).toBe(formatter('Command+A'))
    expect(formatter('CmdOrCtrl+A')).toBe(formatter('CommandOrControl+A'))
    expect(formatter('Alt+A')).toBe(formatter('Option+A'))
    expect(formatter('Alt+A')).toBe(formatter('AltGr+A'))
  })

  test('Modifier', () => {
    expect(formatter('Ctrl+A')).toBe('⌃A')
    expect(formatter('Alt+A')).toBe('⌥A')
    expect(formatter('Shift+A')).toBe('⇧A')
    expect(formatter('Cmd+A')).toBe('⌘A')
  })

  test('Modifier Order', () => {
    expect(formatter('A+Cmd')).toBe('⌘A')
    expect(formatter('Ctrl+Alt+Shift+Cmd+A')).toBe('⌃⌥⇧⌘A')
    expect(formatter('Cmd+Ctrl+Alt+Shift+A')).toBe('⌃⌥⇧⌘A')
    expect(formatter('Shift+Cmd+Ctrl+Alt+A')).toBe('⌃⌥⇧⌘A')
    expect(formatter('Alt+Shift+Cmd+Ctrl+A')).toBe('⌃⌥⇧⌘A')
  })
})

describe('win32', () => {
  beforeAll(() => {
    Object.defineProperty(process, 'platform', {
      value: 'win32'
    })
  })

  // test('equal', () => {
  //   expect(formatter('CmdOrCtrl+A')).toBe('Ctrl+A')
  // })
})
