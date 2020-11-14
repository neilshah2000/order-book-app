export class Order {
    feed: string
    price: number
    product_id: string
    qty: number
    seq: number
    side: string
    timestamp: number


    constructor(orderJson: string) {
        const deserialized = JSON.parse(orderJson)
        this.feed = deserialized.feed
        this.price = deserialized.price
        this.product_id = deserialized.product_id
        this.qty = deserialized.qty
        this.seq = deserialized.seq
        this.side = deserialized.side
        this.timestamp = deserialized.timestamp
    }
}