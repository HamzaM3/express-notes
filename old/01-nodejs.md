execute js outside of browser

Node js doesn't have access to browser API (no fetch !)

lts: long term support

Repl: interpreter
-> run `node`

create file and run node on it
-> `node <file>`

check johnsmilga.com

## globals

- `__dirname`: dir path
- `__filename` :file path
- `require`
- `module`
- `process`
- and more

> !! `process.env` give environment vars

## builtin modules
- os
- path
- fs
- http
path.resolve vs path.join

fs.readFileSync and fs.writeFileSync
readFile, writeFile async (=> call)

http.createServer (??)

I already know all this

there is a `util` lib

util.promisify

require('fs').promises

use async/await

No callback nesting pls

there are events even in nodejs
-> `new EventEmitter = require('event')`

Event driven programming

## Streams
- writeable
- readable
- duplex
- transform

`createReadStream(path)`
- Event driven

fileStream.pipe = allow send in chunk

