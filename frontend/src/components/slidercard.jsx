import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex;
      if (n > 3) {
        newIndex = 1;
      } else if (n < 1) {
        newIndex = 3;
      } else {
        newIndex = n;
      }

      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 2000); // Change the interval duration based on your preference

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className={`mySlides fade ${
            index === slideIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity`}
        >
          <div className="numbertext">{`${index} / 3`}</div>
          <img
            src={`img_${index}_wide.jpg`}
            alt={`Slide ${index}`}
            style={{ width: '100%' }}
          />
          <div className="text">Caption Text</div>
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <div style={{ textAlign: 'center' }}>
        {[1, 2, 3].map((index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
