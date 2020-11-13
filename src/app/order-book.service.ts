import { Injectable } from '@angular/core';
import { PriceFeedService } from './price-feed.service'
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderBookService {
    priceFeedService: PriceFeedService;
    orderBook: Observer<Object>;
    orderBookObservable: Observable<Object>
    orders = [];
    bids = {};
    offers = {};
    last;

    constructor(pfs: PriceFeedService) {
        this.priceFeedService = pfs;
        this.orderBookObservable = new Observable<Object>((subscriber) => {
            this.orderBook = subscriber
        });
        this.priceFeedService.getData().subscribe((order: any) => {
            // this.orders.push(order)
            if (order.side === 'buy') {
                if (order.qty === 0) {
                    delete this.bids[order.price]
                } else {
                    this.bids[order.price] = order.qty
                }
            }
            if (order.side === 'sell') {
                if (order.qty === 0) {
                    delete this.offers[order.price]
                } else {
                    this.offers[order.price] = order.qty
                }
            }

            const sortedOffers = Object.keys(this.offers).sort((p1, p2) => {
                const n1 = Number(p1)
                const n2 = Number(p2)
                return n1 - n2
            })

            const sortedBids = Object.keys(this.bids).sort((p1, p2) => {
                const n1 = Number(p1)
                const n2 = Number(p2)
                return n2 - n1
            })

            const DEPTH = 10

            const bestOffers = sortedOffers.slice(0, DEPTH).map(price => {
                return {
                    price: price,
                    qty: this.offers[price]
                }
            })

            const bestBids = sortedBids.slice(0, DEPTH).map(price => { 
                return {
                    price: price,
                    qty: this.bids[price]
                }
            })

            const myOrderBook = {
                last: order.price,
                bids: bestBids,
                offers: bestOffers
            }


            this.orderBook.next(myOrderBook)

            // feed: "book"
            // price: 16247
            // product_id: "PI_XBTUSD"
            // qty: 2500
            // seq: 11923191
            // side: "buy"
            // timestamp: 1605291757237
        })
    }

    getOrders() {
        return this.orderBookObservable;
    }

    close() {
        this.priceFeedService.close();
    }
}
