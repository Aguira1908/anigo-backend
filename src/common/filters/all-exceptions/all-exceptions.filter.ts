import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { Prisma } from '@prisma/client';

@Catch()
export class AllExeptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    // 1. Tentukan Status Code HTTP & Message
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: any = 'An unexpected error occurred on the server (Internal Server Error)';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse();
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      // Prisma Error Handling
      if (exception.code === 'P2002') {
        status = HttpStatus.CONFLICT;
        const fields = (exception.meta?.target as string[])?.join(', ') || 'unknown';
        message = `Data conflict: A duplicate entry exists for the field(s): ${fields}.`;
      } else if (exception.code === 'P2025') {
        status = HttpStatus.NOT_FOUND;
        message = 'The requested data could not be found.';
      } else {
        // Fallback for other Prisma errors
        status = HttpStatus.BAD_REQUEST;
        message = `Database Error: ${exception.message.split('\\n').pop()}`;
      }
    }

    const logMessage =
      typeof message === 'object' && 'message' in message
        ? message['message']
        : message;

    // 2. LOGGING PINTAR: Bedakan 4xx dan 5xx
    if (status >= 500) {
      // Jika 500 (Server Crash), cetak MERAH dan muntahkan stack trace!
      this.logger.error({
        msg: `[Server Error] ${exception.message || 'Internal Server Error'}`,
        err: exception,
        stack: exception.stack,
        path: request.url,
      });
    } else {
      // Jika 4xx (Misal: 404 Not Found, 400 Bad Request), cetak KUNING sebaris saja!
      this.logger.warn(
        `[Client Error] ${logMessage} | Path: ${request.url}`,
      );
    }

    // 3. Siapkan respons rapi untuk Postman / Frontend
    response.status(status).json({
      status: 'error',
      statusCode: status,
      message: logMessage,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
