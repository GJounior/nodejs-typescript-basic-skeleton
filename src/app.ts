import express from 'express'

const app: express.Application = express()

app.get("/", (request, response) => {
  response.status(200).json({
    "autor": "zcode"
  })
})

export  default app;
