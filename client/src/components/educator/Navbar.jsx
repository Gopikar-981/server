import React from 'react';
import { Link } from 'react-router-dom';
import { assets, dummyEducatorData } from '../../assets/assets';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-32" />
      </Link>
      <div className="flex items-center gap-4">
        <p className="text-sm">Hi! {user ? user.fullName : 'Developer'}</p>
        {user ? (
          <UserButton />
        ) : (
          <img
            src={assets.profile_img}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
