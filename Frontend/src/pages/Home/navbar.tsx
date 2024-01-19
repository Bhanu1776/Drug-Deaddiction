import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/logo.jpeg'

const Navbar = () => (
  <div className="fixed top-0 flex h-14 w-full items-center border-b bg-white px-4 shadow">
    <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
      <span className="flex items-center text-2xl font-semibold ">
        <div className="flex items-center gap-2">
            <img src={Logo} alt="" className="w-8 h-8"/>
              <p className="font-bold tracking-wide ">Drug DeAddict</p>
              </div>
          
      </span>
      <div className="flex w-auto items-center justify-between space-x-4 md:block">
        <ul className='flex gap-10 items-center'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/">Information</Link>
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
