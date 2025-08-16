import React, { useEffect, useRef, useState, useContext } from 'react';
import uniqid from 'uniqid';
import Quill from 'quill';
import { assets } from '../../assets/assets';
import Navbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';
import { AppContext } from '../../context/AppContext';
import './AddCourse.css';

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);
  const [courseTitle, setCourseTitle] = useState('');
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const { isEducator } = useContext(AppContext);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
    }
  }, []);

  const handleAddChapter = () => {
    setChapters(prev => [
      ...prev,
      {
        id: uniqid(),
        chapterTitle: 'Untitled Chapter',
        collapsed: false,
        chapterContent: [],
      },
    ]);
  };

 return (
  <div className="add-course-page">
    <div className="navbar">
      <Navbar />
    </div>

    <div className="main-container">
      {isEducator && (
        <div className="">
          <Sidebar />
        </div>
      )}

      <div className="content-wrapper">
        <form className="course-form">
          <h1>Add Course</h1>

          <label>Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={e => setCourseTitle(e.target.value)}
            placeholder="Enter course title"
            required
          />

          <label>Course Description</label>
          <div ref={editorRef} className="quill-editor" />

          <label>Course Price</label>
          <input
            type="number"
            value={coursePrice}
            onChange={e => setCoursePrice(e.target.value)}
            placeholder="Enter price"
            required
          />

          <label>Course Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files[0])}
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="image-preview"
            />
          )}

          <label>Discount (%)</label>
          <input
            type="number"
            value={discount}
            onChange={e => setDiscount(e.target.value)}
            placeholder="Enter discount"
          />

          <h3>Chapters</h3>
          {chapters.map((chapter, index) => (
            <div key={chapter.id} className="chapter">
              <strong>
                {index + 1}. {chapter.chapterTitle}
              </strong>
              <p>{chapter.chapterContent.length} Lectures</p>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddChapter}
            className="add-chapter-button"
          >
            + Add Chapter
          </button>
        </form>
      </div>
    </div>
  </div>
);

};

export default AddCourse;
