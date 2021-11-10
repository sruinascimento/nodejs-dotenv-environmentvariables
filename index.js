//deve ficar na parte mais alta do projeto
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>ROOT PATH</h1>'))
console.log(process.env.NODE_ENV)

app.listen(process.env.PORT, () =>
  console.log(
    `Server is run at port ${process.env.PORT} by ${process.env.DEV_JR}`
  )
)
