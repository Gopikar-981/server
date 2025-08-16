import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";
import "./CourseSection.css";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="course-section">
      <h2 className="section-title">Learn from the best</h2>
      <p className="section-subtitle">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      <div className="course-grid">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link to="/course-list" onClick={() => scrollTo(0, 0)} className="show-btn">
        Show all courses
      </Link>
    </div>
  );
};

export default CourseSection;
