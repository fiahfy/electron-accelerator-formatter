# electron-accelerator-formatter

![badge](https://github.com/fiahfy/electron-accelerator-formatter/workflows/Node.js%20Package/badge.svg)

> Format [electron accelerator](https://electronjs.org/docs/api/accelerator) according to the platform.

## Installation

```bash
npm install @fiahfy/electron-accelerator-formatter
```

## Usage

```js
import { format } from '@fiahfy/electron-accelerator-formatter'

console.log(format('CmdOrCtrl+A')) // '⌘A' on darwin, 'Ctrl+A' on win32
```
