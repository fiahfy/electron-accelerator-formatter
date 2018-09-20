export default (() => {
  if (typeof process !== 'undefined') {
    return process.platform
  } else {
    const reg = new RegExp('^Mac')
    return reg.test(window.navigator.platform) ? 'darwin' : 'win32'
  }
})()
