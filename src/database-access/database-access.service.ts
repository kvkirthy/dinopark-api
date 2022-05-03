import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dinosaur } from 'src/mongo-schema';

@Injectable()
export class DatabaseAccessService {
    
    constructor(@InjectModel('dinopark-db') private readonly dino: Model<Dinosaur>){
    }

    async getDinosaurs(){
      return await this.dino.find();
    }

}
