const amount = 12

if (amount < 10) {
  console.log("less than 10")
} else {
  console.log('more than 10')
}

console.log(__dirname, ', ', __filename)

console.log(process.env) // environment variable

const m = require('./module')

m()
