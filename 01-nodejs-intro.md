## intro
node executes js code without browser

## globals
a lot of different globals (none of the browser one)
- `__dirname`
- `require
- `module`
- `process`

## modules
module.exports + require
(cjs)
to use module, use mjs extension
(pls dont)

module.exports = {
	field1,
	field2,
	...
}

## os module
there is an os module that does a lot of things
- userInfo
- uptime
- totalmem
- freemem
- ...

## path module
- path.join
- path.resolve
- path.basename
- path.sep
- ...

## fs module
- readfileSync /  writeFileSync
- readFile / writeFile

readFile uses a callback as a 3 argument

## http module
```js
const http = require('http')
const server = http.createServer((req, res) => { 
	switch (req.url) {
		case '/':
			res.end('content of the response')
			break;
		...
	}
})
server.listen(5000)
```

## Event driven development
```js
const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('response', (...args) => {...})

customEmitter.emit('response', ...args)
```

## server with edd

```js
const server = http.createServer()

server.on('request', (req, res) => {
	...
})
```

## streams
`fs.createReadStream`
```js
const stream = fs.createReadStream('file')
stream.on('data', (result) => {
	console.log(result)
})
```

## http transmit streams
First, http.CreateServer:
- (req: http.IncomingMessage, res: http.ServerResponse) => {  }
- this function is just added to the 'request' event

Second, http.ServerResponse inherits `http.OutgoingMessage` inherits Stream (which in this case is a Writable one)

Third, a readable has a pipe method that can take a writable stream to pour into it its data chunk by chunk

We can finally understand this:
```js
(req, res) => {
	const fileStream = fs.createReadStream('file')
	fileStream.on('open', () => {
		fileStream.pipe(res)
	})
	fileStream.on('error', (err) => {
		res.end(err)
	})
})
```

## util.promisify

```js
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

readFilePromise.then(...)
```

