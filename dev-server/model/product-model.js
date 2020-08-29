import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    url: { type: String, unique: true },
    name: String,
    price: String,
    prevPrice: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
productSchema.set('timestamps', true);
productSchema.pre('save', function(next) {
    this.prevPrice = this._price ? this._price : 0;
    next();
});
productSchema.virtual('priceDiff').get(() => {
    return (this.price - this.prevPrice);
});
productSchema.statics.getDifference = (price, prevPrice) => price - prevPrice;

export default mongoose.model('product', productSchema);