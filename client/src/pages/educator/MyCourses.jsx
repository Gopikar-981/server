import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import Sidebar from '../../components/educator/Sidebar';
import Navbar from '../../components/educator/Navbar';
import './MyCourses.css';

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  return courses ? (
    <div className="layout-wrapper">
      <Navbar />
      <div  className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <h1 className="page-title">My Courses</h1>
          <table className="course-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Earnings</th>
                <th>Students</th>
                <th>Published On</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td className="course-cell">
                    <img
                      src={course.courseThumbnail}
                      alt="course"
                      className="thumbnail"
                    />
                    <span>{course.courseTitle}</span>
                  </td>
                  <td>
                    {currency}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td>{course.enrolledStudents.length}</td>
                  <td>{new Date(course.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
