import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DinosaurSchema } from './mongo-schema';
import { DatabaseAccessService } from './database-access/database-access.service';

const username = "dinopark-db";
const password = "rXcLBh73tli50pD66tTLlZmDaQ0pi0u3jM75HbPFvQ6dUakIJvSka7MteohnSftk066Fq41pU2kw69xlhU3X3w==";
const CON_STRING="mongodb://dinopark-db:rXcLBh73tli50pD66tTLlZmDaQ0pi0u3jM75HbPFvQ6dUakIJvSka7MteohnSftk066Fq41pU2kw69xlhU3X3w==@dinopark-db.mongo.cosmos.azure.com:10255/dinopark?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@dinopark-db@";
@Module({
  imports: [    
  //   ServeStaticModule.forRoot({
  //   rootPath: join(__dirname, '..', 'client'),
  // }),
  MongooseModule.forRoot(CON_STRING,{
    auth:{
      username,
      password
    }
  }),
  MongooseModule.forFeature([
    { name: 'dinopark-db', schema: DinosaurSchema }
  ]) 
],
  controllers: [AppController],
  providers: [AppService, DatabaseAccessService],
})
export class AppModule {}
