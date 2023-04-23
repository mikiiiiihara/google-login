import { Module } from '@nestjs/common';
import { TickerResolver } from './ticker.resolver';

@Module({ providers: [TickerResolver] })
export class TickerModule {}
