import { Dino } from './model';
import { dinoList } from './dinosaur';
import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("api/dinos")
  getDinoData(): Array<Dino>{
    return dinoList;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
