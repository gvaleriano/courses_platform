import {Router} from 'express'
import authRoutes from "./auth"
import coursesRoutes from "./courses"

/* Arquivo de rotas de principais do backend */
/* @author Guilherme Valeriano */

const rootRoutes:Router = Router()

rootRoutes.use('/auth', authRoutes)
rootRoutes.use('/courses', coursesRoutes)

export default rootRoutes