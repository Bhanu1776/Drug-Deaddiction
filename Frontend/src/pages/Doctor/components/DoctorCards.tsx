import { DoctorCardContent } from '@/pages/Doctor/utils/DoctorCardContent';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui';

const ServiceCards = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {DoctorCardContent.map(({ index, image, title, description }) => (
        <section
          key={index}
          className="max-w-sm cursor-pointer rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 hover:dark:bg-slate-700"
          onClick={() => handleClick(`/${title.toLowerCase()}/postal`)}
        >
          <img className="rounded-t-lg" src={image} alt="" />
          <article className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <Button variant="default" className="text-white w-36 bg-blue-950 hover:bg-black">
              Contact Now
            </Button>
          </article>
        </section>
      ))}
    </>
  );
};

export default ServiceCards;
