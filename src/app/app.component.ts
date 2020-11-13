import { Component, OnInit } from '@angular/core';
import { PriceFeedService } from './price-feed.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'order-book-app';
    priceFeedService;

    constructor(pfs: PriceFeedService) {
        this.priceFeedService = pfs;
    }

    ngOnInit() {
        const data = this.priceFeedService.getData()
        console.log(data)
    }
}
