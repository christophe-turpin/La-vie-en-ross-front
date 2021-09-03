import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import resumeData from "../assets/resumeData";
import "./mariage.css";

export default function MariageThemes() {
  return (
    <div>
      <div className="Columns">
        {/* <Col className="image" lg="4">
            <img className="Alex" src={resumeData.mariagePic} alt="alex" />
          </Col> */}
        <Col className="themes" lg="12" md="12">
          {resumeData.mariageTheme &&
            resumeData.mariageTheme.map((item) => (
              <div className="themeItem" key={item.title}>
                <h2 className="themeTitle">{item.title}</h2>
                {item.description &&
                  item.description.map((phrase) => (
                    <Row className="themeDescRow" key={item.title}>
                      <p className="desc">{phrase}</p>
                    </Row>
                  ))}
                <Link className="prestaclick" to="/contact">
                  <div className="evenCarousel">
                    <button className="contactButton">Obtenir un devis</button>
                  </div>
                </Link>
              </div>
            ))}
          <div className="themeItem">
            <h2 className="themeTitle">{resumeData.mariageMesure.title}</h2>
            <Row>
              <p className="desc">{resumeData.mariageMesure.description}</p>
            </Row>
            <Link className="prestaclick" to="/contact">
              <div className="evenCarousel">
                <button className="contactButton">Obtenir un devis</button>
              </div>
            </Link>
          </div>
        </Col>
      </div>
    </div>
  );
}
