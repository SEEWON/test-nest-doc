import {
  Controller,
  Get,
  Put,
  Req,
  Body,
  Post,
  HttpCode,
  Header,
  Redirect,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('hi') // HTTP 'get' method
  getHi() {
    this.catsService.getHi();
  }

  @Get() // HTTP 'get' method
  async findAll(): Promise<Cat[]> {
    // Controller에서 req 객체 쓰려면 데코레이터 @Req() 사용. 사실은 @Req()보다 @Body(), @Query(), @Param(), @Headers()으로 씀
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }
}

// get 요청 경로는 @Controller에 들어간 prefix. 여기서는 /cats
// 만약 get에 prefix가 @Get('breed')로 들어갔다면, /cat/breed
// 경로로 요청 들어올 시 해당하는 응답과 함께 200 리턴
// 응답은 항상 200, POST는 201.
// @HttpCode() 추가해서 다른 응답 코드 내보낼 수 있음!

// 표준 응답
// 컨트롤러가 JS object, array 리턴하면 JSON으로 자동 serializae해 전송
// string, number, boolean같은 JS 원시타입 리턴하면 just value 전송. Nest가 알아서 보냄

// 직접 응답 객체 만들기
// @Res() 데코레이터 써서 가능
