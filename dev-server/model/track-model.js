import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
    url: String,
    name: String,
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
trackSchema.set('timestamps', true);

export default mongoose.model('track', trackSchema);