import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ApiResponse } from 'src/common/dto/api-response.dto';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 1. Ambil object response
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    return next.handle().pipe(
      map((res: any) => {
        const statusCode = response.statusCode;

        if (
          res instanceof ApiResponse ||
          (res !== null &&
            typeof res === 'object' &&
            res._isApiResponse === true)
        ) {
          return {
            status: 'success',
            statusCode,
            message: res.message || 'request success',
            data: res.data !== undefined ? res.data : null,
            ...(res.meta && { meta: res.meta }),
          };
        }

        return {
          status: 'success',
          statusCode,
          message: 'request success',
          data: res !== undefined ? res : null,
        };
      }),
    );
  }
}
