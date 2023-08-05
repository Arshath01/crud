import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between p-3 bg-gray-800 text-white">
      <h1 className='font-bold my-auto'>CRUD APPLICATION</h1>
      <Link to={location.pathname === '/adduser' ? '/' : '/adduser'}>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
          {location.pathname === '/adduser' ? 'Home' : 'Add User'}
        </button>
      </Link>
    </div>
  );
};
