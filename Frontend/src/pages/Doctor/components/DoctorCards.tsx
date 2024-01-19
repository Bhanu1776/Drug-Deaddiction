import { DoctorCardContent } from '@/pages/Doctor/utils/DoctorCardContent';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  const navigate = useNavigate();
  const [doctordata,setDoctordata] = useState([])

  const handleClick = (path: string) => {
    navigate(path);
  };

  const getDoctorsData = async()=>{
    const response = await fetch('http://localhost:5000/api/doctor/getdoctor')
    const doctorData = await response.json()
    setDoctordata(doctorData)
  }

  useEffect(()=>{
    getDoctorsData();
  },[])

  console.log(doctordata)

  return (
    <>
      {doctordata.map(({ _id,username, email , index, address, contact }) => (
        <section
          key={index}
          className="max-w-sm cursor-pointer rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 hover:dark:bg-slate-700"
          // onClick={() => handleClick(`/${username.toLowerCase()}/postal`)}
        >
          {/* <img className="rounded-t-lg" src={image} alt="" /> */}
          <article className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {username}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {email}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {address}
            </p>
            <Link to={`/docdetails/${_id}`}>
            <Button variant="default" className="text-white w-36 bg-blue-950 hover:bg-black">
              Contact Now
            </Button>
            </Link>
          </article>
        </section>
      ))}
    </>
  );
};

export default ServiceCards;
