import express from 'express'
import cors    from 'cors'
import morgan  from 'morgan'
import dotenv  from 'dotenv'
dotenv.config()

import routes from './routes.js'

const app     = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.use(routes)

export default app