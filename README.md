# @fiahfy/electron-accelerator-formatter

> Format [electron accelerator](https://electronjs.org/docs/api/accelerator) according to the platform.

## Installation
```
npm install @fiahfy/electron-accelerator-formatter
```

## Usage
```
import format from '@fiahfy/electron-accelerator-formatter'

console.log(format('CmdOrCtrl+A')) // '⌘A' on darwin, 'Ctrl+A' on win32
```
