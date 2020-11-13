import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceFeedService {

    constructor() { }

    getData() {
        return 10;
    }
}
