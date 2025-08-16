import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading'; // ✅ make sure this is correct
import Sidebar from '../../components/educator/Sidebar';
import Navbar from '../../components/educator/Navbar';
import './StudentsEnrolled.css'; // ✅ optional: include if you're using custom CSS

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className="layout-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <h2>Students Enrolled</h2>
          <table className="enrollment-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Course Title</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {enrolledStudents.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="student-info">
                    <img src={item.student.imageUrl} alt="" className="student-img" />
                    <span>{item.student.name}</span>
                  </td>
                  <td>{item.courseTitle}</td>
                  <td>{new Date(item.purchaseDate).toLocaleDateString()}</td>
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

export default StudentsEnrolled;
