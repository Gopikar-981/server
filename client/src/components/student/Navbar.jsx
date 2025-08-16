import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isEducator } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();
useEffect(() => {
    console.log('Navbar mounted. User:', user);
    console.log('Is educator:', isEducator);
  }, [user, isEducator]);

  return (
    <div className="w-full bg-[#dff5ff] py-3 px-10 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-700">
        {user && (
  <>
    <button onClick={() => navigate('/educator/dashboard')} className="becomeedu">
      {isEducator ? 'Educator Dashboard' : 'Become Educator'}
    </button>
    <span>|</span>
    <Link to="/my-enrollments" className="enroll">My Enrollments</Link>
  </>
)}


        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} className="createaccount">
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
