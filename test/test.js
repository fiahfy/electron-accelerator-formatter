let formatter

describe('format for darwin', () => {
  beforeAll(() => {
    Object.defineProperty(process, 'platform', {
      value: 'darwin'
    })
    jest.resetModules()
    formatter = require('../lib').default
  })

  test('valid formatted keys', () => {
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

  test('valid formatted alias keys', () => {
    expect(formatter('Cmd+A')).toBe(formatter('Command+A'))
    expect(formatter('CmdOrCtrl+A')).toBe(formatter('CommandOrControl+A'))
    expect(formatter('Alt+A')).toBe(formatter('Option+A'))
    expect(formatter('Alt+A')).toBe(formatter('AltGr+A'))
  })

  test('valid formatted modifier keys', () => {
    expect(formatter('Ctrl+A')).toBe('⌃A')
    expect(formatter('Alt+A')).toBe('⌥A')
    expect(formatter('Shift+A')).toBe('⇧A')
    expect(formatter('Cmd+A')).toBe('⌘A')
  })

  test('valid moodifier orders', () => {
    expect(formatter('A+Cmd')).toBe('⌘A')
    expect(formatter('Ctrl+Alt+Shift+Cmd+A')).toBe('⌃⌥⇧⌘A')
    expect(formatter('Cmd+Ctrl+Alt+Shift+A')).toBe('⌃⌥⇧⌘A')
    expect(formatter('Shift+Cmd+Ctrl+Alt+A')).toBe('⌃⌥⇧⌘A')
    expect(formatter('Alt+Shift+Cmd+Ctrl+A')).toBe('⌃⌥⇧⌘A')
  })
})

describe('format for win32', () => {
  beforeAll(() => {
    Object.defineProperty(process, 'platform', {
      value: 'win32'
    })
    jest.resetModules()
    formatter = require('../lib').default
  })

  test('valid formatted keys', () => {
    expect(formatter('A')).toBe('A')
    expect(formatter('Plus')).toBe('+')
    expect(formatter('Space')).toBe('Space')
    expect(formatter('Tab')).toBe('Tab')
    expect(formatter('Backspace')).toBe('Backspace')
    expect(formatter('Delete')).toBe('Delete')
    expect(formatter('Return')).toBe('Enter')
    expect(formatter('Enter')).toBe('Enter')
    expect(formatter('Up')).toBe('Up')
    expect(formatter('Down')).toBe('Down')
    expect(formatter('Left')).toBe('Left')
    expect(formatter('Right')).toBe('Right')
    expect(formatter('PageUp')).toBe('PageUp')
    expect(formatter('PageDown')).toBe('PageDown')
    expect(formatter('Escape')).toBe('Escape')
    expect(formatter('Esc')).toBe('Esc')
  })

  test('valid formatted alias keys', () => {
    expect(formatter('Cmd+A')).toBe(formatter('Command+A'))
    expect(formatter('CmdOrCtrl+A')).toBe(formatter('CommandOrControl+A'))
    expect(formatter('Alt+A')).toBe(formatter('Option+A'))
    expect(formatter('Alt+A')).toBe(formatter('AltGr+A'))
  })

  test('valid formatted modifier keys', () => {
    expect(formatter('Ctrl+A')).toBe('Ctrl+A')
    expect(formatter('Alt+A')).toBe('Alt+A')
    expect(formatter('Shift+A')).toBe('Shift+A')
    expect(formatter('Windows+A')).toBe('Windows+A')
  })

  test('valid moodifier orders', () => {
    expect(formatter('A+Ctrl')).toBe('Ctrl+A')
    expect(formatter('Ctrl+Alt+Shift+Windows+A')).toBe('Ctrl+Alt+Shift+Windows+A')
    expect(formatter('Windows+Ctrl+Alt+Shift+A')).toBe('Ctrl+Alt+Shift+Windows+A')
    expect(formatter('Shift+Windows+Ctrl+Alt+A')).toBe('Ctrl+Alt+Shift+Windows+A')
    expect(formatter('Alt+Shift+Windows+Ctrl+A')).toBe('Ctrl+Alt+Shift+Windows+A')
  })
})
