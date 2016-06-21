const express = require('express')
const app = express()

// setup mongo/redis:
// process.env.REDIS_URL
// process.env.MONGO_URL

app.get('/', (req, res) => res.status(200).json({ hello: 'world' }))

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`sample server running on ${PORT}`)
})
