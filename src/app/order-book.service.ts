import { Injectable } from '@angular/core';
import { PriceFeedService } from './price-feed.service'
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Order } from '../interfaces/Order'
import { OrderBook } from './../interfaces/OrderBook'


@Injectable({
    providedIn: 'root'
})
export class OrderBookService {
    private priceFeedService: PriceFeedService;
    private orderBook: Observer<Object>;
    private orderBookObservable: Observable<Object>
    private orders = [];
    private bids = {};
    private offers = {};
    private last;

    constructor(pfs: PriceFeedService) {
        this.priceFeedService = pfs;
        this.orderBookObservable = new Observable<Object>((subscriber) => {
            this.orderBook = subscriber
        });
        this.priceFeedService.getData().subscribe((order: Order) => {
            // this.orders.push(order)
            if (order.side === 'buy') {
                if (order.qty === 0) {
                    delete this.bids[order.price]
                } else {
                    this.bids[order.price] = order
                }
            }
            if (order.side === 'sell') {
                if (order.qty === 0) {
                    delete this.offers[order.price]
                } else {
                    this.offers[order.price] = order
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
                return this.offers[price]
            })

            const bestBids = sortedBids.slice(0, DEPTH).map(price => { 
                return this.bids[price]
            })

            const myOrderBook = new OrderBook(order.price, bestBids, bestOffers)


            this.orderBook.next(myOrderBook)
        })
    }

    getOrders() {
        return this.orderBookObservable;
    }

    close() {
        this.priceFeedService.close();
    }
}
