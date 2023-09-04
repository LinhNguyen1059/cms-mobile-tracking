import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      '🚀 ~ file: logger.middleware.ts ~ line 8 ~ LoggerMiddleware ~ use ~ Request...',
      req,
    );
    next();
  }
}
