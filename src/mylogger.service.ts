import { Injectable, Inject, Logger } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class MyLogger {
  constructor(@Inject(REQUEST) private readonly request: Request) {}
  log(message: string) {
    Logger.log(`${this.request.originalUrl} ${message}`);
  }
}