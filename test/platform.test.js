describe('platform on nodejs', () => {
  test('should work on darwin', () => {
    Object.defineProperty(process, 'platform', { value: 'darwin' })
    jest.resetModules()
    const platform = require('../src/platform').default
    expect(platform).toBe('darwin')
  })

  test('should work on win32', () => {
    Object.defineProperty(process, 'platform', { value: 'win32' })
    jest.resetModules()
    const platform = require('../src/platform').default
    expect(platform).toBe('win32')
  })
})

describe('platform on browser', () => {
  beforeAll(() => {
    global.process = undefined
  })

  test('should work on darwin', () => {
    Object.defineProperty(window.navigator, 'platform', { value: 'MacIntel', configurable: true })
    jest.resetModules()
    const platform = require('../src/platform').default
    expect(platform).toBe('darwin')
  })

  test('should work on win32', () => {
    Object.defineProperty(window.navigator, 'platform', { value: 'Win32', configurable: true })
    jest.resetModules()
    const platform = require('../src/platform').default
    expect(platform).toBe('win32')
  })
})
