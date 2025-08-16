import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import Rating from '../../components/student/Rating';
import Footer from '../../components/student/Footer';
import './Player.css';

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [courseRating, setCourseRating] = useState(0); // ⭐ Added for dynamic rating

  const getCourseData = () => {
    const course = enrolledCourses.find(course => course._id === courseId);
    setCourseData(course);
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleRatingChange = (newRating) => {
    setCourseRating(newRating);
    console.log("User rated:", newRating);
    // Optional: Save to backend or localStorage here
  };

  useEffect(() => {
    getCourseData();
  }, [enrolledCourses]);

  const extractVideoId = (url) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (hostname === "youtu.be") {
        return parsedUrl.pathname.slice(1);
      } else if (hostname.includes("youtube.com")) {
        const query = new URLSearchParams(parsedUrl.search);
        const v = query.get("v");
        if (v) return v;

        const parts = parsedUrl.pathname.split("/");
        const embedIndex = parts.indexOf("embed");
        if (embedIndex !== -1 && parts.length > embedIndex + 1) {
          return parts[embedIndex + 1];
        }
      }
    } catch (err) {
      console.error("Invalid YouTube URL:", err);
    }
    return "";
  };

  return (
    <>
      <div className="player-container">
        {/* Left Panel */}
        <div className="player-left">
          <h2 className="player-heading">Course Structure</h2>

          {courseData?.courseContent?.map((chapter, index) => (
            <div key={index} className="chapter-box">
              <div
                onClick={() => toggleSection(index)}
                className="chapter-header"
              >
                <div className="chapter-title">
  <img
    src={assets.down_arrow_icon}
    alt="arrow"
    className={`arrow-icon ${openSections[index] ? 'rotate' : ''}`}
  />
  <p>{chapter.chapterTitle}</p> {/* ✅ Fixed field name */}
</div>

                <p className="chapter-info">
                  {chapter.chapterContent.length} lectures · {calculateChapterTime(chapter)}
                </p>
              </div>

              <div className={`chapter-content ${openSections[index] ? 'open' : ''}`}>
                <ul>
                  {chapter.chapterContent.map((lecture, i) => (
                    <li key={i} className="lecture-item">
                      <img
                        src={false ? assets.blue_tick_icon : assets.play_icon}
                        alt="icon"
                        className="lecture-icon"
                      />
                      <div className="lecture-details">
                        <p>{lecture.lectureTitle}</p>
                        <div className="lecture-meta">
                          {lecture.lectureUrl && (
                            <span
                              onClick={() =>
                                setPlayerData({ ...lecture, chapter: index + 1, lecture: i + 1 })
                              }
                              className="watch-link"
                            >
                              Watch
                            </span>
                          )}
                          <span>
                            {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                              units: ['h', 'm'],
                              round: true,
                            })}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="rating-section">
            <h3>Rate this course:</h3>
            <Rating initialRating={courseRating} onRate={handleRatingChange} />
          </div>
        </div>

        {/* Right Panel */}
        <div className="player-right">
          {playerData ? (
            <div className="video-box">
              <YouTube
                videoId={extractVideoId(playerData.lectureUrl)}
                opts={{
                  width: "100%",
                  height: "350",
                  playerVars: { autoplay: 1 },
                }}
              />
              <div className="video-meta">
                <p className="video-title">
                  {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
                </p>
                <button className="complete-btn">Mark as Complete</button>
              </div>
            </div>
          ) : (
            <img
              src={courseData?.courseThumbnail}
              alt="course"
              className="thumbnail-img"
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;
