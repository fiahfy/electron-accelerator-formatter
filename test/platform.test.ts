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
  test('should work on darwin', () => {
    Object.defineProperty(global, 'process', { value: undefined })
    Object.defineProperty(window.navigator, 'platform', {
      value: 'MacIntel',
      configurable: true
    })
    jest.resetModules()
    const platform = require('../src/platform').default
    expect(platform).toBe('darwin')
  })

  test('should work on win32', () => {
    Object.defineProperty(global, 'process', { value: undefined })
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Win32',
      configurable: true
    })
    jest.resetModules()
    const platform = require('../src/platform').default
    expect(platform).toBe('win32')
  })
})
