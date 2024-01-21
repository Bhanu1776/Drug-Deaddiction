import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/logo.jpeg'

const Navbar = () => (
  <div className="fixed top-0 z-50 flex items-center w-full px-4 bg-white shadow h-14">
    <div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
      <span className="flex items-center text-2xl font-semibold ">
        <div className="flex items-center gap-2">
            <img src={Logo} alt="" className="w-8 h-8"/>
              <p className="font-bold tracking-wide ">Drug DeAddict</p>
              </div>
          
      </span>
      <div className="flex items-center justify-between w-auto space-x-4 md:block">
        <ul className='flex items-center gap-10'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/guidelines">Guidelines</Link>
        </li>
        <Button size="sm" variant="outline" className="text-white" asChild>
          <Link to="/signup">Signup</Link>
        </Button>
          </ul>

      </div>
    </div>
  </div>
);

export default Navbar;
