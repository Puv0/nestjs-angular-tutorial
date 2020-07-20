import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import enviroment from './enviroment';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [ArticleModule,
    MongooseModule.forRoot(enviroment.mongoUrl)
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


}
