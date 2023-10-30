import jobdata from "./data";
import JobCard from "./JobCard";

export default function PeopleRenderer() {
  const arr = jobdata.map((data) => {
    return (
      <JobCard
        key={data.id}
        meta={data.meta}
        name={data.name}
        place={data.place}
        type={data.type}
        ctc={data.ctc}
      />
    );
  });
  return (
    <div style={{backgroundColor:'#FFFF', paddingTop:'2%'}}>
    <div className='bg-lightsteelblue'>
      <h1 className="text-black text-3xl font-semibold font-['Poppins'] text-center mb-11 font-pop ">All Listed jobs</h1>
      <div className='bg-ligthsteelblue  flex-wrap justify-center mb-15 '>
        {arr}
      </div>
    </div>
    </div>
  );
}