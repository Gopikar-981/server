import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import Footer from '../../components/student/Footer';
import { assets } from '../../assets/assets';
import YouTube from 'react-youtube';
import humanizeDuration from 'humanize-duration';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

  const {
    allCourses,
    calculateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
  } = useContext(AppContext);

  useEffect(() => {
    if (allCourses?.length) {
      const found = allCourses.find((course) => course._id === id);
      setCourseData(found);
    }
  }, [id, allCourses]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handlePreviewClick = (url) => {
    const videoId = url.includes('youtube')
      ? new URL(url).searchParams.get('v')
      : url.split('/').pop();
    setPlayerData({ videoId });
  };

  if (!courseData) return <Loading />;

  return (
    <div className="course-container">
      <div className="course-main">
        <div className="course-left">
          <h1 className="course-title">{courseData.courseTitle}</h1>
          <p
            className="course-description"
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}
          />
          <div className="course-meta">
            <p className="rating">{calculateRating(courseData)}</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={i < Math.round(calculateRating(courseData)) ? assets.star : assets.star_blank}
                  alt="star"
                />
              ))}
            </div>
            <p className="review-count">({courseData.courseRatings.length} ratings)</p>
            <p className="enroll-count">{courseData.enrolledStudents.length} enrolled</p>
          </div>
          <p className="instructor">Course by <strong>GreatStack</strong></p>
          <h2 className="structure-heading">Course Structure</h2>
          {courseData.courseContent.map((chapter, index) => (
            <div key={index} className="chapter">
              <div className="chapter-header" onClick={() => toggleSection(index)}>
                <div className="chapter-title">
  <img src={assets.down_arrow_icon} alt="toggle" className={openSections[index] ? 'rotated' : ''} />
  <span>{chapter.chapterTitle}</span> {/* <-- FIXED LINE */}
</div>

                <p className="chapter-meta">
                  {chapter.chapterContent.length} lectures • {calculateChapterTime(chapter)}
                </p>
              </div>
              <div className={`chapter-content ${openSections[index] ? 'open' : ''}`}>
                {chapter.chapterContent.map((lecture, i) => (
                  <div key={i} className="lecture">
                    <img src={assets.play_icon} alt="play" />
                    <div>
                      <p className="lecture-title">{lecture.lectureTitle}</p>
                      <div className="lecture-meta">
                        {lecture.isPreviewFree && (
                          <span
                            className="preview-link"
                            onClick={() => handlePreviewClick(lecture.lectureUrl)}
                          >
                            Preview
                          </span>
                        )}
                        <span>{humanizeDuration(lecture.lectureDuration * 60000, { units: ['h', 'm'], round: true })}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <h3 className="full-description-title">Full Course Description</h3>
          <p className="full-description" dangerouslySetInnerHTML={{ __html: courseData.courseDescription }} />
        </div>

        <div className="course-right">
          {playerData ? (
            <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} className="video-player" />
          ) : (
            <img src={courseData.courseThumbnail} alt="Course thumbnail" className="course-thumbnail" />
          )}

          <div className="price-box">
            <div className="offer-message">
              <img src={assets.time_left_clock_icon} alt="clock" />
              <p>5 days left at this price!</p>
            </div>
            <div className="price">
              <span className="current-price">
                {currency} {(courseData.coursePrice - (courseData.discount * courseData.coursePrice) / 100).toFixed(2)}
              </span>
              <span className="original-price">{currency}{courseData.coursePrice}</span>
            </div>
            <p className="discount">{courseData.discount}% off</p>

            <div className="course-stats">
              <div><img src={assets.star} alt="star" /> {calculateRating(courseData)}</div>
              <div><img src={assets.time_clock_icon} alt="clock" /> {calculateCourseDuration(courseData)}</div>
              <div><img src={assets.lesson_icon} alt="lesson" /> {calculateNoOfLectures(courseData)} lessons</div>
            </div>

            <button className="enroll-btn">
              {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
            </button>

            <div className="includes">
              <p className="includes-title">What's included:</p>
              <ul>
                <li>Lifetime access with free updates</li>
                <li>Step-by-step project guidance</li>
                <li>Downloadable source code</li>
                <li>Quizzes to test your knowledge</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
