//root module of the controller
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}

// module -> define 사용할 다른 모듈과, Controller / Service
