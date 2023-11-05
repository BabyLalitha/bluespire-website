import React from 'react';
import Link from 'next/link';  
import jobData from './jobsData.json';

const CareersPage = () => {
  return (
    <div>
      <h1>Welcome to Our Careers Page</h1>

      <div className="job-listings">
        {jobData.map(job => (
          <div key={job.id}>
            {/* <h2>{job.title}</h2> */}
            {/* <p>{job.description}</p> */}
            <Link href={`/career/jd?id=${job.id}`} passHref>
              {job.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareersPage;
