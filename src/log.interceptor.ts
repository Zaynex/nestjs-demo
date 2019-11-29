import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MyLogger } from './mylogger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: MyLogger) {

  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    this.logger.log("hello");
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}