import screening from '../../models/tblScreening'

export default async function postScreening(req,res){
    try {
        const { _id,question,choice1,choice2 } = req.body;

        // Create a new document using the Mongoose model
        const newData = new screening({ _id, question,choice1,choice2});

        // Save the document to the database
        await newData.save();

        res.status(201).json({ message: 'Data created successfully', data: newData });
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}