import peopleData from "./PeopleData";
import PeopleCard from "./PeopleCard";

export default function PeopleRenderer() {
  const arr = peopleData.map((data) => {
    return (
      <PeopleCard
        key={data.id}
        name={data.name}
       
      />
    );
  });
  return (
    <div style={{backgroundColor:'#F6F7FA', paddingTop:'2%'}}>
    <div className='bg-lightsteelblue'>
      <h1 className=" bg-ligthsteelblue text-center mb-5 lg:text-5xl md:text-lg  font-medium">Popular Categories</h1>
      <div className='bg-ligthsteelblue    mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
        {arr}
      </div>
    </div>
    </div>
  );
}



{/* <div className='bg-ligthsteelblue flex-warp  justify-center mb-10 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5'> */}