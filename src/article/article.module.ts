import { ArticleSchema } from './schemas/article.schemas';
import { Article } from './interfaces/article.interface';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';

@Module({

    imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }])
],
    
    controllers: [ArticleController],
    providers: [ArticleService],



})
export class ArticleModule {}
