import {Response, Request, NextFunction} from 'express'
import { prisma } from ".."
import * as jwt from 'jsonwebtoken'
import { hashSync, compareSync } from "bcrypt"
import { BadRequestException } from "../exceptions/bad-request"
import { ErrorCode } from "../exceptions/root"

interface SignupProps {
  email: string
  password: string
  name:string
}

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const newUser:SignupProps = req.body;

  let user = await prisma.user.findFirst({where: {email: newUser.email}})
  if(user){
    next(new BadRequestException('Usuario já cadastrado!', ErrorCode.USER_ALREADY_EXISTS))
  }

  user = await prisma.user.create({
    data: {
      email: newUser.email,
      name: newUser.name,
      password: hashSync(newUser.password, 10)
    }
  })
  res.json(user)
}

export const login = async (req: Request, res: Response, next:NextFunction) => {
  const {email, password}:SignupProps = req.body;
  let token = "";
  let user = await prisma.user.findFirst({where: {email}})
  if(!user){
    next(new BadRequestException('Usuario não cadastrado!', ErrorCode.USER_NOT_FOUND))
  }else{
    if(!compareSync(password, user.password)){
      next(new BadRequestException('Senha incorreta!', ErrorCode.INCORRECT_PASSWORD))
    }
     token = jwt.sign({
      userId: user.id
    }, "#umTokenDeTeste5434#")
  }

  res.json({user, token})
}
