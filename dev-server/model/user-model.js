import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs'

const userSchema = new mongoose.Schema({
   username: { type: String, unique: true },
   password: String
});
userSchema.set('timestamps', true);
userSchema.pre('save', function(next) {
   this.username = this.username.toLowerCase();
   this.password = bcrypt.hashSync(this.password);
   next();
});
userSchema.statics.checkMatch = (password, hash) => {
   return bcrypt.compareSync(password, hash);
};

export default mongoose.model('user', userSchema);