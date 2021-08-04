import React from "react";
import "./evenementiel.css";
import { Col, Row } from "reactstrap";
import Carousel from "./Carousel";
import resumeData from "../assets/resumeData";
import { Link } from "react-router-dom";
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
            <blockquote id="quote">
              <p>
                <i id="iquote">&ldquo;{resumeData.eventCit2} &rdquo; </i>
              </p>
            </blockquote>
            <span className="mobileSpan">{resumeData.eventAuth2}</span>
          </div>
          {resumeData.temoinEVJF[0].date ? (
            resumeData.temoinEVJF.map((item) => (
              <div className="comItem" key={item.name}>
                <Row className="comRow">
                  <h4 className="info">
                    {item.name}, EVJF {item.date} :
                  </h4>
                  <p className="com">"{item.com}"</p>
                </Row>
              </div>
            ))
          ) : (
            <p>Pas de témoignage pour le moment</p>
          )}
          <div id="carDiv">
            <Carousel carousel={resumeData.EVJFCarousel} />
          </div>
          <Link className="prestaclick" to="/contact">
            <div className="evenCarousel">
              <button className="contactButton">Obtenir un devis</button>
            </div>
          </Link>
        </Col>
      </div>
    </div>
  );
};

export default EVJFEVG;
