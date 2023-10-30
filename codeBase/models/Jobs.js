import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/adminmoduleDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a Mongoose model for your data
const Schema = mongoose.Schema;
const JobSchema = new Schema({
    companyName: String,
    companyWebsite: String,
    jobTitle: String,
    jobCategory: String,
    jobType: String,
    location: String,
    skills: String,
    experience: String,
    active: Boolean,
    qualification:String,
    applnLink:String,
    jobDescription:String
});

export default mongoose.models.Jobs || mongoose.model('Jobs', JobSchema);