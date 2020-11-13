import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PriceFeedService } from './price-feed.service'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [PriceFeedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
