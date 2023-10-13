import React from 'react'
import Job from '../models/tblJobs'

async function getJobById(req,res) {
    try{
    const  _id  = req.query.id;

  // Use the ID to fetch the resource from your database or data source
  const item = await Job.findById(_id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

export default getJobById