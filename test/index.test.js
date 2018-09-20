let format

describe('format on darwin', () => {
  beforeAll(() => {
    jest.resetModules()
    jest.mock('../src/platform', () => 'darwin')
    format = require('../src').default
  })

  test('single key should be formatted correctly', () => {
    expect(format('A')).toBe('A')
    expect(format('Plus')).toBe('+')
    expect(format('Space')).toBe('Space')
    expect(format('Tab')).toBe('⇥')
    expect(format('Backspace')).toBe('⌫')
    expect(format('Delete')).toBe('⌦')
    expect(format('Return')).toBe('↩')
    expect(format('Enter')).toBe('↩')
    expect(format('Up')).toBe('↑')
    expect(format('Down')).toBe('↓')
    expect(format('Left')).toBe('←')
    expect(format('Right')).toBe('→')
    expect(format('PageUp')).toBe('⇞')
    expect(format('PageDown')).toBe('⇟')
    expect(format('Escape')).toBe('⎋')
    expect(format('Esc')).toBe('⎋')
  })

  test('single key with a modifier should be formatted correctly', () => {
    expect(format('Ctrl+A')).toBe('⌃A')
    expect(format('Alt+A')).toBe('⌥A')
    expect(format('Shift+A')).toBe('⇧A')
    expect(format('Cmd+A')).toBe('⌘A')
    expect(format('CmdOrCtrl+A')).toBe('⌘A')
  })

  test('single key with modifiers should be formatted correctly', () => {
    expect(format('Ctrl+Cmd+A')).toBe('⌃⌘A')
    expect(format('Ctrl+Alt+Cmd+A')).toBe('⌃⌥⌘A')
    expect(format('Ctrl+Alt+Shift+Cmd+A')).toBe('⌃⌥⇧⌘A')
  })
})

describe('format on win32', () => {
  beforeAll(() => {
    jest.resetModules()
    jest.mock('../src/platform', () => 'win32')
    format = require('../src').default
  })

  test('single key should be formatted correctly', () => {
    expect(format('A')).toBe('A')
    expect(format('Plus')).toBe('+')
    expect(format('Space')).toBe('Space')
    expect(format('Tab')).toBe('Tab')
    expect(format('Backspace')).toBe('Backspace')
    expect(format('Delete')).toBe('Delete')
    expect(format('Return')).toBe('Enter')
    expect(format('Enter')).toBe('Enter')
    expect(format('Up')).toBe('Up')
    expect(format('Down')).toBe('Down')
    expect(format('Left')).toBe('Left')
    expect(format('Right')).toBe('Right')
    expect(format('PageUp')).toBe('PageUp')
    expect(format('PageDown')).toBe('PageDown')
    expect(format('Escape')).toBe('Escape')
    expect(format('Esc')).toBe('Esc')
  })

  test('single key with a modifier should be formatted correctly', () => {
    expect(format('Ctrl+A')).toBe('Ctrl+A')
    expect(format('Alt+A')).toBe('Alt+A')
    expect(format('Shift+A')).toBe('Shift+A')
    expect(format('Windows+A')).toBe('Windows+A')
    expect(format('CmdOrCtrl+A')).toBe('Ctrl+A')
  })

  test('single key with modifiers should be formatted correctly', () => {
    expect(format('Ctrl+A')).toBe('Ctrl+A')
    expect(format('Ctrl+Alt+A')).toBe('Ctrl+Alt+A')
    expect(format('Ctrl+Alt+Shift+A')).toBe('Ctrl+Alt+Shift+A')
  })
})
