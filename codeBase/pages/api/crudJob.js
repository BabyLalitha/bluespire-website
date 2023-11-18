
// import bodyParser from 'body-parser';
// import job from '../../models/tblJobs'
import Jobs from '../../models/Jobs'
import {connect} from "../../dbConfig/dbConfig";

export default async function crudJob(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    // res.json({ message: 'This is a Next.js API' });

    // Middleware to parse JSON data in request bodies
    // app.use(bodyParser.json());
    connect()
    if (req.method === 'POST') {
        try {
            const {companyName,clientName,jobTitle,jobCategory,jobType,location,workplaceType,skills,experience,qualification,seniorityLevel,applnLink,jobDescription,active,selectedQuestions} = req.body;

            // Create a new document using the Mongoose model
            const newData = new Jobs({ companyName,clientName,jobTitle,jobCategory,jobType,location,workplaceType,skills,experience,qualification,seniorityLevel,applnLink,jobDescription,active,selectedQuestions });

            // Save the document to the database
            await newData.save();

            res.status(201).json({ message: 'Data created successfully', data: newData });
        } catch (error) {
            console.error('Error creating data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    if (req.method === 'GET') {
        try {
            const items = await Jobs.find();
            res.json(items);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
    if (req.method === 'DELETE') {
        try {
          const { id } = req.body; // Get the _id value from the request body
    
          // Use Mongoose to delete the record by _id
          const deletedRecord = await Jobs.findByIdAndDelete(id);
    
          if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
          }
    
          return res.status(200).json({ message: 'Record deleted successfully' });
        } catch (error) {
          console.error('Error deleting record:', error);
          return res.status(500).json({ message: 'Error deleting record' });
        }
      }
      // } else {
      //   return res.status(405).json({ message: 'Method not allowed' });
      // }
    if(req.method==='PUT'){
      try{
      const {id,updateData} = req.body;
        // console.log(id);
        // console.log(updateData);
    const updatedItem = await Jobs.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
    });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
}