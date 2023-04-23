import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';

@Resolver(() => String)
export class TickerResolver {
  @UseGuards(AccessTokenGuard)
  @Query(() => String)
  async tickers() {
    return 'GraphQL';
  }
}
