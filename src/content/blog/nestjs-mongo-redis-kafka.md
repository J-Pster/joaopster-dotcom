---
title: 'A clean NestJS service with Mongo, Redis and Kafka'
description: 'Notes from building a typed, event-driven REST API in NestJS, where each piece earns its place and the boundaries stay honest.'
pubDate: 'Apr 22 2026'
---

I like NestJS for the same reason I like TypeScript: it pushes you toward structure before you've made a mess. When I built a small REST API on Mongo, Redis and Kafka as a technical deep-dive, the interesting part wasn't any single tool. It was deciding what each one was *allowed* to do.

## One responsibility per layer

The shape I keep coming back to:

- **Controller.** Speaks HTTP. Validates input, returns output, knows nothing about persistence.
- **Service.** Owns the business logic. The only place a rule lives.
- **Repository.** Speaks to Mongo. The only place a query lives.

```ts
@Controller('orders')
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  @Post()
  create(@Body() dto: CreateOrderDto): Promise<Order> {
    return this.orders.create(dto);
  }
}
```

That `CreateOrderDto` is doing real work. Validation happens **once**, at the boundary, and everything downstream trusts the type. No re-checking the same field in three places. If it's an `Order` in the service, it's already valid.

## Redis is a cache, not a database

The trap with Redis is letting it slowly become a source of truth. I keep it boring: cache reads that are expensive and tolerant of staleness, set a TTL, and treat a miss as normal rather than exceptional. If losing the cache would corrupt data, it was never really a cache.

## Kafka means designing for at-least-once

The moment you add an event stream, you've signed up for messages arriving more than once. So consumers have to be idempotent: processing the same event twice produces the same result as processing it once.

In practice that means an idempotency key and a check before the side effect, not after. It's a small amount of discipline that saves you from a whole category of 3am incidents.

## The throughline

None of this is exotic. It's the same idea repeated at every layer: make the illegal state unrepresentable, validate at the edge, and let each component do one thing well. The tools change. The discipline doesn't.

---

*Draft notes. I want to turn this into a fuller walkthrough with the repo attached. The original experiment lives [on GitHub](https://github.com/J-Pster/Dynadok-Test).*
