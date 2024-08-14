import {Router} from 'express'
import { createCourse, updateCourse, deleteCourse, listCourses, getCourseById } from "../controllers/courses"

const coursesRoutes:Router = Router()
//As rotas estão sem validações de erros
coursesRoutes.post('/', createCourse)
coursesRoutes.put('/:id', updateCourse)
coursesRoutes.delete('/:id', deleteCourse)
coursesRoutes.get('/', listCourses)
coursesRoutes.get('/:id', getCourseById)

export default coursesRoutes