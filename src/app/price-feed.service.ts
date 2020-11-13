import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PriceFeedService {
    END_POINT = 'wss://futures.kraken.com/ws/v1'
    MESSAGE = '{"event":"subscribe","feed":"book","product_ids":["PI_XBTUSD"]}'
    socket;
    observer: Observer<Object>;

    constructor() { }

    getData() {
        const classThis = this;
        this.socket = new WebSocket(this.END_POINT);
        this.socket.onopen = () => {this.socket.send(this.MESSAGE)}
        this.socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            classThis.observer.next(JSON.parse(event.data));
        });
        return this.createObservable();
    }

    createObservable() : Observable<Object> {
        return new Observable(observer => {
            this.observer = observer;
        });
    }

    close() {
        this.socket.close();
    }
}
