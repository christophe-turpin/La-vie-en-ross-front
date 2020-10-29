import React from "react";
import "./portfolio.css";
import { Col , Row } from "reactstrap";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import resumeData from "../assets/resumeData";
const Portfolio = () => {
  return (
    <div className="about">
      <div className="columns">
        <Col className="image" md="4">
          <img className="Alex" src={resumeData.mariagePic} alt="alex" />
        </Col>
        <Col md="8">
          <h2 className="title">Anniversaires</h2>
          <div id="ct">
            <div className="corner " id="left_top" />
            <div className="corner" id="left_bottom" />
            <div className="corner" id="right_top" />
            <div className="corner" id="right_bottom" />
            <span>{resumeData.eventAuth1}</span>
            <blockquote id='quote'>
              <p>
                <i>&ldquo;{resumeData.eventCit1} &rdquo; </i>
              </p>
            </blockquote>
          </div>
          <h2>Témoignages</h2>
		  {resumeData.temoinHBD[0].date ?
            resumeData.temoinHBD.map((item) => (
              <div className="comItem">
                <Row className="comRow">
                  <h4 className="info">
                    {item.date} par {item.name} :
                  </h4>
                  <p className="com">"{item.com}"</p>
                  <div id="carDiv">
                    <Carousel carousel={item.car} />
                  </div>
                </Row>
              </div>
            )): <p>Pas de témoignage pour le moment</p>}
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
          <h2>Témoignages</h2>
          {resumeData.temoinEVJF &&
            resumeData.temoinEVJF.map((item) => (
              <div className="comItem">
                <Row className="comRow">
                  <h4 className="info">
                    {item.date} par {item.name} :
                  </h4>
                  <p className="com">"{item.com}"</p>
                  <div id="carDiv">
                    <Carousel carousel={item.car} />
                  </div>
                </Row>
              </div>
            ))}
          <h2 className="title">ENTREPRISES</h2>
          <div id="ct">
            <div className="corner " id="left_top" />
            <div className="corner" id="left_bottom" />
            <div className="corner" id="right_top" />
            <div className="corner" id="right_bottom" />
            <span>{resumeData.eventAuth3}</span>
            <blockquote id='quote'>
              <p>
                <i>
                  &ldquo;{resumeData.eventCit3}&rdquo;{" "}
                </i>
              </p>
            </blockquote>
          </div>
		  <h2>Témoignages</h2>
		  {resumeData.temoinETS[0].date ?
            resumeData.temoinETS.map((item) => (
              <div className="comItem">
                <Row className="comRow">
                  <h4 className="info">
                    {item.date} par {item.name} :
                  </h4>
                  <p className="com">"{item.com}"</p>
                  <div id="carDiv">
                    <Carousel carousel={item.car} />
                  </div>
                </Row>
              </div>
            )): <p>Pas de témoignage pour le moment</p>}
          <Link to="/contact">
            <div className="evenCarousel">
              <button className="contactButton">Contactez-nous</button>
            </div>
          </Link>
        </Col>
      </div>
    </div>
  );
};

export default Portfolio;
