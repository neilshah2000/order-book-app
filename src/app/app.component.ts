import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderBookService } from './order-book.service';
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'order-book-app';
    orderBookService;
    last;
    bids;
    offers;

    constructor(obs: OrderBookService) {
        this.orderBookService = obs;
    }

    ngOnInit() {
        this.orderBookService.getOrders()
            .pipe(throttle(val => interval(1000)))
            .subscribe(book => {
                this.last = book.last
                this.bids = book.bids
                this.offers = book.offers
            })
    }

    ngOnDestroy() {
        this.orderBookService.close();
    }

    onRowClicked(row) {
        console.log(row)
    }
}
