import { off } from 'process'
import { Order } from './Order'

export class OrderBook {
    last: number
    bids: Order[]
    offers: Order[]

    constructor(last: number, bids: Order[], offers: Order[]) {
        this.last = last
        this.bids = bids
        this.offers = offers
    }
}