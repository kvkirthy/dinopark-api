// import { Dino } from './model';
// import { dinoList } from './dinosaur';
// import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import { DatabaseAccessService } from './database-access/database-access.service';
import { Dinosaur } from './mongo-schema';

@Controller("api")
export class AppController {
  constructor(private readonly dataSvc: DatabaseAccessService) {}

  @Get("dinos")
  async getDinoData() /*: Promise<Array<Dinosaur>>*/{
    return await this.dataSvc.getDinosaurs()
  }

}
