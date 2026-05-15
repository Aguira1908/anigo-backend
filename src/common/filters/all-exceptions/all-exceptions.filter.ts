import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Logger } from 'nestjs-pino';

@Catch()
export class AllExeptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    // 1. Tentukan Status Code HTTP
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

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
        `[Client Error] ${exception.message} | Path: ${request.url}`,
      );
    }

    // 3. Siapkan respons rapi untuk Postman / Frontend
    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Terjadi kesalahan pada server (Internal Server Error)';

    response.status(status).json({
      status: 'error',
      statusCode: status,
      message:
        typeof message === 'object' && 'message' in message
          ? message['message']
          : message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
