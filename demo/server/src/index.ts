import express, { json, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import singleRouter from './routes/single.js'
import multiRouter from './routes/multi.js'

const app = express()
const port = process.env.PORT || 8080

const corsOptions = {
  origin: ['http://localhost:8080', 'https://developers.ceramic.network'],
  optionsSuccessStatus: 200, // For legacy browser support
}

app.use(json())
app.use(cors(corsOptions))
// app.use(bodyParser.json());

const allowCrossDomain = (_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(allowCrossDomain)

app.use('/single', singleRouter)
app.use('/multi', multiRouter)

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
