import React from "react";
import "./mariage.css";
import { Col, Row, } from "reactstrap";
import resumeData from "../assets/resumeData";
import Carousel from "./Carousel";

const Mariage = () => {
  return (
    <div className="about">
      <div className="columns">
        {/* <Col className="image" lg="4">
          <img className="Alex" src={resumeData.mariagePic} alt="alex" />
        </Col> */}
        <Col lg="12" md="12">
        {resumeData.temoinMar[0].date ?
            resumeData.temoinMar.map((item) => (
              <div className="comItem">
                <Row className="comRow">
                  <h4 className="info">
                    {item.date} par {item.name} :
                  </h4>
                  <p className="com">"{item.com}"</p>
                </Row>
              </div>
            )): <p>Pas de témoignage pour le moment</p>}
            <div id="carDiv">
                <Carousel carousel={resumeData.MariageCarousel} />
            </div>
        </Col>
      </div>
    </div>
  );
};

export default Mariage;
