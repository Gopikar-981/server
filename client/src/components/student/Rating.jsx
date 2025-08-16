import React, { useEffect, useState } from 'react';
import './Rating.css';

const Rating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleRating = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    if (initialRating) {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div className="rating-stars">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleRating(starValue)}
            className={`star ${starValue <= rating ? 'filled' : ''}`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
