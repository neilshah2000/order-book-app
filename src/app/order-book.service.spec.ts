import { TestBed } from '@angular/core/testing';
import { OrderBookService } from './order-book.service';
import { PriceFeedService } from './price-feed.service';
import { PriceFeedServiceMock } from './price-feed.service.mock'

describe('OrderBookService', () => {
    let service: OrderBookService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: PriceFeedService, useClass: PriceFeedServiceMock}]
        });
        service = TestBed.inject(OrderBookService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an order book', (done) => {
        service.getOrders().subscribe((orderBook) => {
            console.log(orderBook)
            done()
        })
        expect(service).toBeTruthy();
    })
});
