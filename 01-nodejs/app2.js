const os = require('os')

console.log(os.uptime())

const path = require('path')

console.log(path.join(__dirname, 'folder', 'subfolder', 'file.txt'))
console.log(path.resolve(__dirname, 'folders', 'subfolder', 'file.txt'))

const { readFileSync, writeFileSync } = require('fs');