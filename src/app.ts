import express from 'express'
import personRouter from './routes/person.router'

const app: express.Application = express()

app.get("/", (request, response) => {
  response.status(200).json({
    "autor": "zcode"
  })
})


app.use("/person", personRouter)



export  default app;
