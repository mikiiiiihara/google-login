import { Test, TestingModule } from '@nestjs/testing';
import { TickerResolver } from './ticker.resolver';

describe('TickerResolver', () => {
  let resolver: TickerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TickerResolver],
    }).compile();

    resolver = module.get<TickerResolver>(TickerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
