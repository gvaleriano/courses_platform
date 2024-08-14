// message , status code, error codes, error
/* Classe para tratamento de exception no backend */
/* @author Guilherme Valeriano */

export class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: ErrorCode;

  constructor(message:string, errorCode: ErrorCode, statusCode:number, errors: any){
    super(message)
    this.message = message
    this.errorCode = errorCode
    this.statusCode = statusCode
    this.errors = errors
  }
}

// enum para listar todos os error codes esperados
export enum ErrorCode {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INCORRECT_PASSWORD = 1003,
  GENERIC_ERROR = 1005 // Criei esse erro apenas para adicionar uma excessão as rotas
}