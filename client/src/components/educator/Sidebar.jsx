import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import './Sidebar.css';

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  return (
    isEducator && (
      <div className="sidebar">
        <NavLink
          to="/educator/dashboard"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <img src={assets.home_icon} alt="Dashboard" />
          Dashboard
        </NavLink>

        <NavLink
          to="/educator/add-course"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <img src={assets.add_icon} alt="Add Course" />
          Add Course
        </NavLink>

        <NavLink
          to="/educator/my-courses"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <img src={assets.my_course_icon} alt="My Courses" />
          My Courses
        </NavLink>

        <NavLink
          to="/educator/students-enrolled"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <img src={assets.person_tick_icon} alt="Students Enrolled" />
          Students Enrolled
        </NavLink>
      </div>
    )
  );
};

export default Sidebar;
