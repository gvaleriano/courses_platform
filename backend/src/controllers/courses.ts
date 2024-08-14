import {Response, Request, type NextFunction} from 'express'
import {prisma} from '..'
import { ErrorCode, HttpException } from "../exceptions/root"
//Deixei os handlers de erro bem genericos
export const createCourse = async(req:Request, res:Response) =>{

  // Em outra modelagem não adicionaria todos os itens em uma unica linha da tabela,
  // mas para esse MVP vou deixar dessa forma

  //Criar validator para essa request
  const course = await prisma.courses.create({
    data: {
      ...req.body,
      tecnology: req.body.tecnology.join(','),
      carrer:  req.body.carrer.join(','),
    }
  })
  res.json(course)
}

export const updateCourse = async(req:Request, res:Response) => {
  try {
    const course = req.body;

    if(course.tecnology){
      course.tecnology = course.tecnology.join(',')
    }

    if(course.carrer){
      course.carrer = course.carrer.join(',')
    }

    const updatedCourse = await prisma.courses.update({
      where: {
        id: req.params.id
      },
      data: course
    })
    res.json(updatedCourse)

  } catch (err) {
    throw new HttpException('Curso não encontrado', ErrorCode.GENERIC_ERROR, 400, null)
  }
}

export const deleteCourse = async(req:Request, res:Response) => {
  try {
    const course = await prisma.courses.delete({
      where: {
        id: req.params.id
      }
    })
    res.json(course)
  } catch (error) {
    throw new HttpException('Curso não encontrado', ErrorCode.GENERIC_ERROR, 400, null)
  }
}

export const listCourses = async(req:Request, res:Response) => {
    const count = await prisma.courses.count()
    const courses = await prisma.courses.findMany({
      skip: req.query.skip ? +req.query.skip : 0,
      take: 10
    })
    res.json({
      count, data:courses
    })
}

export const getCourseById = async(req:Request, res:Response) => {
  try {
    const course = await prisma.courses.findFirstOrThrow({
      where: {
        id: req.params.id
      }
    })
    res.json(course)
  } catch (error) {
    throw new HttpException('Curso não encontrado', ErrorCode.GENERIC_ERROR, 400, null)
  }
}