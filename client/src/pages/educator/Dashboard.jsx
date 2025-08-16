import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading';
import Navbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const { currency } = useContext(AppContext);

  useEffect(() => {
    setDashboardData(dummyDashboardData);
  }, []);

  if (!dashboardData) return <Loading />;

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="dashboard-main">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>

        <div className="dashboard-content">
          <div className="dashboard-cards">
            <div className="card">
              <img src={assets.patients_icon} alt="Enrollments" />
              <div>
                <p className="count">{dashboardData.enrolledStudentsData.length}</p>
                <p>Total Enrollments</p>
              </div>
            </div>
            <div className="card">
              <img src={assets.appointments_icon} alt="Courses" />
              <div>
                <p className="count">{dashboardData.totalCourses}</p>
                <p>Total Courses</p>
              </div>
            </div>
            <div className="card">
              <img src={assets.earning_icon} alt="Earnings" />
              <div>
                <p className="count">{currency}{dashboardData.totalEarnings}</p>
                <p>Total Earnings</p>
              </div>
            </div>
          </div>

          <div className="enrollments-section">
            <h2>Latest Enrollments</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
                  <th>Course Title</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="student-cell">
                      <img src={item.student.imageUrl} alt="Profile" />
                      <span>{item.student.name}</span>
                    </td>
                    <td>{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
