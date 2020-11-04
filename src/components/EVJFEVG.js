import React from "react";
import "./evenementiel.css";
import { Col , Row } from "reactstrap";
import Carousel from "./Carousel";
import resumeData from "../assets/resumeData";
const EVJFEVG = () => {
  return (
    <div className="about">
      <div className="columns">
        {/* <Col className="image" lg="4">
          <img className="Alex" src={resumeData.mariagePic} alt="alex" />
        </Col> */}
        <Col lg="12" md="12">
            <h2 className="title">EVJF/EVG</h2>
            <div id="ct">
              <div className="corner " id="left_top" />
              <div className="corner" id="left_bottom" />
              <div className="corner" id="right_top" />
              <div className="corner" id="right_bottom" />
              <span>{resumeData.eventAuth2}</span>
              <blockquote id='quote'>
                <p>
                  <i>
                    &ldquo;{resumeData.eventCit2} &rdquo;{" "}
                  </i>
                </p>
              </blockquote>
            </div>
          {resumeData.temoinEVJF[0].date ?
            resumeData.temoinEVJF.map((item) => (
              <div className="comItem">
                <Row className="comRow">
                  <h4 className="info">
                    {item.date} par {item.name} :
                  </h4>
                  <p className="com">"{item.com}"</p>
                </Row>
              </div>
            )) : <p>Pas de témoignage pour le moment</p>}
            <div id="carDiv">
                <Carousel carousel={resumeData.EVJFCarousel} />
            </div>
          {/* <Link to="/contact">
            <div className="evenCarousel">
              <button className="contactButton">Contactez-nous</button>
            </div>
          </Link> */}
        </Col>
      </div>
    </div>
  );
};

export default EVJFEVG;
