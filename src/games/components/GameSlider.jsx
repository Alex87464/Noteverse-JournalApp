import { useEffect, useRef, useState } from "react";
import style from './GameSlider.module.css';
import slider1 from '../../assets/slider1.webp';
import slider2 from '../../assets/slider2.webp';
import slider3 from '../../assets/slider3.webp';
import slider4 from '../../assets/slider4.webp';

const GameSlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Array of food images
  const images = [slider1, slider2, slider3, slider4];
  // Time of display before it slides to the next pic
  const delay = 3500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, images.length]);




  return (
    <div className={style.slideshow}>
      <div
        className={style.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <img
            key={idx}
            className={style.slide}
            src={image}
            alt={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className={style.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`${style.slideshowDot}${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default GameSlider;
