import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../interfaces/Order'

@Injectable()
export class PriceFeedServiceMock {

    constructor() { }

    public getData(): Observable<Order> {

        return of(
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15953.5,\"qty\":10,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15954.5,\"qty\":20,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15955,\"qty\":30,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15956,\"qty\":4000,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15957,\"qty\":561,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15958,\"qty\":9841,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15958,\"qty\":1,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15959,\"qty\":654,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15960,\"qty\":156,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15961,\"qty\":48,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"sell\",\"seq\":19596457,\"price\":15962,\"qty\":19,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15950,\"qty\":18,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15949,\"qty\":13,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15948,\"qty\":19,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15947,\"qty\":18,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15946,\"qty\":19,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15945,\"qty\":789,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15944,\"qty\":19,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15943.5,\"qty\":49,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15942.5,\"qty\":18,\"timestamp\":1605362033812}"),
            new Order("{\"feed\":\"book\",\"product_id\":\"PI_XBTUSD\",\"side\":\"buy\",\"seq\":19596457,\"price\":15941.5,\"qty\":19,\"timestamp\":1605362033812}"),

        )
    }

    public close() {
        
    }

}
