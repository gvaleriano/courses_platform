import express, {Express, Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
import rootRoutes from "./routes"
import { errorMiddleware } from "./middlewares/errors"
const cors = require('cors')

/* Arquivo de configuração de rotas para o backend */
/* @author Guilherme Valeriano */

const app:Express = express()
app.use(express.json())
app.use(cors({
  origin: '*'
}))

app.use('/api', rootRoutes)


export const prisma = new PrismaClient()

app.use(errorMiddleware)


app.listen(3000, () => {console.log('App Working!')})