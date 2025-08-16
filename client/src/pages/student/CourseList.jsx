import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchBar from '../../components/student/SearchBar';
import CourseCard from '../../components/student/courseCard';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';
import './CourseList.css'
const CourseList = () => {
  const navigate = useNavigate();
  const { allCourses } = useContext(AppContext);
  const { input } = useParams();

  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses];
      if (input) {
        setFilteredCourses(
          tempCourses.filter(item =>
            item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setFilteredCourses(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <div className="px-6 py-4">
      {/* Header: Title + Search */}
      <div className="flex justify-between items-center flex-wrap mb-4 gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Course List</h1>
          <p className="text-sm text-gray-600">
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Home
            </span>{' '}
            / <span>Course List</span>
          </p>
        </div>
        <SearchBar data={input} />
      </div>

      {/* Show search keyword with close icon */}
      {input && (
        <div className="inline-flex items-center mb-4">
          <p className="mr-2 font-medium">{input}</p>
          <img
            src={assets.cross_icon}
            alt="clear"
            className="cursor-pointer w-4 h-4"
            onClick={() => navigate('/course-list')}
          />
        </div>
      )}

      {/* Grid of Course Cards */}
      <div className="course-grid">
  {filteredCourses.map((course, index) => (
    <CourseCard key={index} course={course} />
  ))}
</div>


      <Footer />
    </div>
  );
};

export default CourseList;
