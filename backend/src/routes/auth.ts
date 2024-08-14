import {Router} from 'express'
import {login,signup } from "../controllers/auth"

/* Arquivo de rotas de autenticação do backend */
/* @author Guilherme Valeriano */

const authRoutes:Router = Router()

authRoutes.post('/signup', signup)
authRoutes.post('/login', login)

export default authRoutes