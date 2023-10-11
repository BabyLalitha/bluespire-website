import screening from '../../models/tblScreening'

export default async function getScreening(req,res){
    if(req.method==='GET'){
        try {
            // Step 4: Handle the retrieval logic in the controller
            const items = await screening.find();
            res.json(items);
          }
           catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
          }
    }
}