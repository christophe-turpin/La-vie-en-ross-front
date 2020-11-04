import React, { useState } from 'react';
import './evenementiel.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';
import './anim.css'
  
  
  const Portfolio = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const items = props.carousel;

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items && items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.url}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <img src={item.url} className='item-img' alt={item.url}/>
        </CarouselItem>
      );
    });
  
    return (
      <div className='carouselDiv'>
        <style>
          {
            `.custom-tag {
                max-width: 50%;
                height: 50vh;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
	);
};

export default Portfolio;
