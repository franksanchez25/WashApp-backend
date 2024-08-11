import { Module } from '@nestjs/common';
import { WashService } from './wash.service';
import { WashController } from './wash.controller';

@Module({
  controllers: [WashController],
  providers: [WashService],
})
export class WashModule {}
