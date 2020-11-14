import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Order } from '../interfaces/Order'

@Injectable({
  providedIn: 'root'
})
export class PriceFeedService {
    private END_POINT = 'wss://futures.kraken.com/ws/v1'
    private MESSAGE = '{"event":"subscribe","feed":"book","product_ids":["PI_XBTUSD"]}'
    private socket;
    private observer: Observer<Order>;

    constructor() { }

    public getData(): Observable<Order> {
        const classThis = this;
        this.socket = new WebSocket(this.END_POINT);
        this.socket.onopen = () => {this.socket.send(this.MESSAGE)}
        this.socket.addEventListener('message', function (event) {
            classThis.observer.next(new Order(event.data));
        });
        return this.createObservable();
    }

    public close() {
        this.socket.close();
    }

    private createObservable() : Observable<Order> {
        return new Observable(observer => {
            this.observer = observer;
        });
    }
}
