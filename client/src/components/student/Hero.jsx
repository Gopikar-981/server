import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';
import './Hero.css';
const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#e1f5ff] to-white px-4 pt-8 md:pt-12 pb-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h1 className="mt-[80px] text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          Empower your future with the courses designed to <br />
          <span className="font-bold text-blue-900">
             fit your choice.
          </span>
        </h1>

        {/* Sketch underline aligned center under headline */}
        <div className="relative inline-block mt-4">
          <img
            src={assets.sketch}
            alt="sketch underline"
            className="w-48 md:w-60 mx-auto pointer-events-none"
          />
        </div>

        {/* Supporting paragraph */}
        <p className="subpara">
          We bring together world-class instructors, interactive content, and a supportive <br /> community to help you achieve your personal and professional goals.
        </p><SearchBar />
      </div>
    </div>
  );
};

export default Hero;
