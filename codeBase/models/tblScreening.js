
import mongoose from 'mongoose'

// mongoose.connect('mongodb://127.0.0.1:27017/adminmoduleDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const Schema = mongoose.Schema;

const ScreeningSchema = new Schema({
    _id:Number,
    question:String,
    choice1: String,
    choice2:String,
});

export default mongoose.models.tblScreening || mongoose.model('tblScreening', ScreeningSchema);
