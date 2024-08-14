import { HttpException, ErrorCode } from "./root";

/**
 * Classe para tratamento de exceções bad request
 */
export class BadRequestException extends HttpException {
  constructor(message:string, errorCode:ErrorCode){
    super(message, errorCode, 400, null);
  }
}