import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PriceFeedService } from './price-feed.service'
import { OrderBookService}  from './order-book.service'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [PriceFeedService, OrderBookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
