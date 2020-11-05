import React, { useState, useEffect } from "react";
import resumeData from "../assets/resumeData";
import "./anim.css";
import Carousel3D from "./Carousel3D";

const AnimBorder = () => {
  const [usedTitle, setUsedTitle] = useState('ROSE');
  const [title, setTitle] = useState(usedTitle);
  const [rotate, setRotate] = useState("-");

  function txtRotate() {
    setTimeout(() => {
      if (title.length > usedTitle.length - 4 && rotate === "-") {
        setTitle(title.substr(0, title.length - 1));
      } else if (title.length === usedTitle.length - 4) {
        usedTitle === 'ROSE'
          ? setUsedTitle('ROSS')
          : setUsedTitle('ROSE');
        setRotate("+");
        setTitle(usedTitle.substr(0, title.length + 1));
      } else if (title.length < usedTitle.length && rotate === "+") {
        setTitle(usedTitle.substr(0, title.length + 1));
      } else if (title.length === usedTitle.length) {
        setTimeout(()=>{
          setRotate("-");
          setTitle(title.substr(0, title.length - 1));
        }, 1000)
      } 
    }, 200);
  }
  
  useEffect(() => {
    txtRotate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <div className="header">
      <div className="inner-header flex">
        <h1 className="Htitle">La Vie en {title}</h1>
      </div>
      <Carousel3D carousel={resumeData.carousel}/>
      <div className="waveDiv">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="rgb(255,255,255)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimBorder;
