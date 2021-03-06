import platform from './platform'

const darwin = platform === 'darwin'

const alias = (key: string): string => {
  switch (key) {
    case 'CommandOrControl':
      return 'CmdOrCtrl'
    case 'Command':
      return 'Cmd'
    case 'Control':
      return 'Ctrl'
    case 'Option':
    case 'AltGr':
      return 'Alt'
    default:
      return key
  }
}

const modifier = (key: string): string => {
  if (key === 'Super') {
    key = darwin ? 'Cmd' : 'Windows'
  }
  if (key === 'Windows') {
    key = darwin ? '' : 'Windows'
  }
  if (key === 'CmdOrCtrl') {
    key = darwin ? 'Cmd' : 'Ctrl'
  }
  if (key === 'Cmd') {
    key = darwin ? 'Cmd' : ''
  }
  return key
}

const keyOrders = ['Ctrl', 'Alt', 'Shift', 'Cmd', 'Windows']

const sortKey = (a: string, b: string): number => {
  let aIndex = keyOrders.indexOf(a)
  let bIndex = keyOrders.indexOf(b)
  aIndex = aIndex === -1 ? Infinity : aIndex
  bIndex = bIndex === -1 ? Infinity : bIndex
  if (aIndex > bIndex) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
}

// @see https://apple.stackexchange.com/questions/55727/where-can-i-find-the-unicode-symbols-for-mac-functional-keys-command-shift-e
const formatKey = (key: string): string => {
  switch (key) {
    case 'Ctrl':
      return darwin ? '⌃' : key
    case 'Alt':
      return darwin ? '⌥' : key
    case 'Shift':
      return darwin ? '⇧' : key
    case 'Cmd':
      return '⌘'
    case 'Windows':
      return key
    case 'Plus':
      return '+'
    case 'Space':
      return key
    case 'Tab':
      return darwin ? '⇥' : key
    case 'Backspace':
      return darwin ? '⌫' : key
    case 'Delete':
      return darwin ? '⌦' : key
    case 'Return':
    case 'Enter':
      return darwin ? '↩' : 'Enter'
    case 'Up':
      return darwin ? '↑' : key
    case 'Down':
      return darwin ? '↓' : key
    case 'Left':
      return darwin ? '←' : key
    case 'Right':
      return darwin ? '→' : key
    case 'PageUp':
      return darwin ? '⇞' : key
    case 'PageDown':
      return darwin ? '⇟' : key
    case 'Escape':
    case 'Esc':
      return darwin ? '⎋' : key
    case 'Insert':
    case 'Home':
    case 'End':
    case 'VolumeUp':
    case 'VolumeDown':
    case 'VolumeMute':
    case 'MediaNextTrack':
    case 'MediaPreviousTrack':
    case 'MediaStop':
    case 'MediaPlayPause':
    case 'PrintScreen':
      return darwin ? '' : key
    default:
      return key
  }
}

export const format = (accelerator: string): string => {
  return accelerator
    .split('+')
    .map(alias)
    .map(modifier)
    .filter((element) => !!element)
    .filter((element, index, array) => array.indexOf(element) === index)
    .sort(sortKey)
    .map(formatKey)
    .join(darwin ? '' : '+')
}
