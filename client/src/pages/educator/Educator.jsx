// src/pages/educator/Educator.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';
import Footer from '../../components/educator/Footer';

const Educator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-[260px] border-r bg-white shadow-sm">
          <Sidebar />
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet /> {/* This is what renders the nested route content */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Educator;
