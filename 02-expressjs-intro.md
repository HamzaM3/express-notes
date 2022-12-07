## http protocol conventions
MIME-type
Status code

pls do: 
```js
res.writeHead(200, { 'content-type': 'text/html' })

res.writeHead(`<status code>`, { 'content-type': `<MIME type>` })
```

## files
send files with readFile or FileStream

## expressjs is a framework

```js
const express = require('express')
const app = express()

app.get(`<route>`, (req, res) => {
	res.status(`<code>`).send(`<data>`)
})

app.listen(`<port>`, () => {
	// code on open
})
```

Basic methods
```js
app.get
app.post
app.put
app.delete
app.all
app.use
app.listen
```

route = '\*' is for all path (to set up 404)

**DONT FORGET 404**

## express.static
You can give access to a folder by doing:

```js
app.use(`<url prefix>`, express.static(`<folder>`))
```
folder can be absolute or relative path

## Send json

res has a json option

> Express res and req are improved nodejs ones

```js
res.json(data)
```

## Params query
`req.query` to get the param query

use `:<varname>` to put parametric path
- ex: `/api/product/:prodID/reviews/:reviewID`
- `req.params`: get the param

> Order of routes matter

## middleware
Function:
```js
(req, res, next) => {
	// whatever
	next() // got to the next middleware
}
```

```
app.get(route, middleware1, middleware2, lastcallback)
```

express.static is a middleware

## app.use

```js
app.use(route, [...middlewares])
```

use the middleware before everything

## morgan
a lot of middlewares
- morgan('tiny')

> btw: express.urlencoded (to parse form data) and express.json (to parse json)

## http methods
```js
app.get
app.post
a lot of middlewares
 morgan('tiny')

> btw: express.urlencoded (to parse form data) and express.json (to parse json)

​￼￼￼http methods
￼JavaScript￼
app.get
app.post
app.put
app.delete
app.all
```

## How to architecture expressjs

Create routes

Each route has a file

`express.Router`

You know what check the archi folder !
