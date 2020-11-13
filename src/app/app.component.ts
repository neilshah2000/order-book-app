import { Component, OnInit, OnDestroy } from '@angular/core';
import { PriceFeedService } from './price-feed.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'order-book-app';
    priceFeedService;

    constructor(pfs: PriceFeedService) {
        this.priceFeedService = pfs;
    }

    ngOnInit() {
        this.priceFeedService.getData().subscribe(console.log)
    }

    ngOnDestroy() {
        this.priceFeedService.close();
    }
}
