import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import resumeData from '../assets/resumeData'

export default function Example() {
    
    const [goToSlide, setGoToSlide] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [offsetRadius, setOffsetRadius] = useState(2)
    // eslint-disable-next-line no-unused-vars
    const [showNavigation, setShowNavigation] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [Config, setConfig] = useState(config.gentle)

    const carousel = resumeData.carousel.map(item => ({ key: uuidv4(), content: <img src={item.url} alt={resumeData.carousel.indexOf(item)}/>}))



  const slides = carousel.map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  function carouselIndex() {
    setTimeout(() => {
        goToSlide === carousel.length - 1 ?
        setGoToSlide(0) :
        setGoToSlide(goToSlide + 1)
    }, 3000);
  }
  
  useEffect(() => {
    carouselIndex();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goToSlide]);

  // useEffect(()=> {
  //     resumeData.carousel.map(item => carousel.push({
  //         key: uuidv4(),
  //         content: <img src={item.url} alt={resumeData.carousel.indexOf(item)}/>
  //       }))
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


    return (
      <div style={{ width: "80%", height: "80%", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={Config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
        </div>
      </div>
    );
}
