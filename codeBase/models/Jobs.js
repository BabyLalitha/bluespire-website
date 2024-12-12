import {mongoose,ObjectId} from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/adminmoduleDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// Create a Mongoose model for your data
const Schema = mongoose.Schema;
const JobSchema = new Schema({
    jobId:Number,
    companyName: String,
    clientName: String,
    jobTitle: String,
    jobCategory: String,
    jobType: String,
    location: String,
    workplaceType:String,
    skills: String,
    experience: String,
    seniorityLevel:String,
    active: Boolean,
    qualification:String,
    applnLink:String,
    jobDescription:String,
    selectedQuestions:[String]
});

export default mongoose.models.Jobs || mongoose.model('Jobs', JobSchema);