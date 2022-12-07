const express = require('express')
const app = express();
const router = require('./routes/a.js')

app.use('/a', router)

app.get('/', (req, res) => {
  if (req.url === '/') {
    res.status(200).json({
      success: true,
      data: {
        greetings: 'hello world'
      }
    })
  } else {
    res.status(404).send('No such API endpoint')
  }
})

app.listen(5000, () => {
  console.log('Server started...')
})

