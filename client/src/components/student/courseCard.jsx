import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import './CourseCard.css'; // ✅ Important

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  const discountedPrice = (
    course.coursePrice - (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="course-card"
    >
      <img className="course-img" src={course.courseThumbnail} alt="" />
      <div className="course-info">
        <h3 className="course-title">{course.courseTitle}</h3>

        

        <p className="course-price">
          {currency} {discountedPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
