import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PriceFeedService } from './price-feed.service'
import { OrderBookService}  from './order-book.service'
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [PriceFeedService, OrderBookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
