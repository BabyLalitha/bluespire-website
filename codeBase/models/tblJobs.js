import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/adminmoduleDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a Mongoose model for your data
const Schema = mongoose.Schema;
const JobSchema = new Schema({
    _id: String,
    role: String,
    type: String,
    location: String,
    EmploymentType: String,
    jobDescription: String,
    skills: String,
    experience: String,
    active: Boolean,
    selectedQuestions : [Number]
});

export default mongoose.models.tblJobs || mongoose.model('tblJobs', JobSchema);