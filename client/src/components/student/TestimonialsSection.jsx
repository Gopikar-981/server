import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';
import './TestimonialsSection.css'; 

const TestimonialsSection = () => {
  return (
    <div className="testimonials-wrapper">
      <h2 className="testimonials-heading">Testimonials</h2>
      <p className="testimonials-subtext">
        Hear from our learners as they share their journeys of transformation, success,<br />
        and how our platform has made a difference in their lives.
      </p>

      <div className="testimonial-grid">
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img className="testimonial-avatar" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>

            <div className="testimonial-body">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="star"
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </div>

            <a href="#" className="testimonial-readmore">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
