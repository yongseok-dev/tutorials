import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeOrmConfig } from './configs/tyoeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BoardsModule],
})
export class AppModule {}
