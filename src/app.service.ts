import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPosts(): string {
    return 'Get posts';
  }
}
