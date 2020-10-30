import React from "react";
import "./mariage.css";
import { Col, Row, Table } from "reactstrap";
import resumeData from "../assets/resumeData";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Mariage = () => {
  return (
    <div className="about">
      <div className="columns">
        <Col className="image" lg="4">
          <img className="Alex" src={resumeData.mariagePic} alt="alex" />
        </Col>
        <Col lg="8" md="12">
          <div id="ct">
            <div className="corner " id="left_top"></div>
            <div className="corner" id="left_bottom"></div>
            <div className="corner" id="right_top"></div>
            <div className="corner" id="right_bottom"></div>
            <span>{resumeData.mariageAuth}</span>
            <blockquote id="quote">
              <p>
                <i id="iquote">&ldquo;{resumeData.mariageCit} &rdquo; </i>
              </p>
            </blockquote>
          </div>
          <h1 className="presentation">{resumeData.mariageh1}</h1>
          <h2>{resumeData.mariageh2}</h2>
          <h2>Témoignages</h2>
          {resumeData.temoinMar &&
            resumeData.temoinMar.map((item) => (
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
          <div id="carDiv"></div>
          <h2>{resumeData.mariageWelcome}</h2>
          <h3>{resumeData.mariageEntour}</h3>
          
          <Table hover id="mariagePrices">
            {/* <caption>Prestations: </caption> */}

            {/* <tr>
                            <th>Titre colonne 1</th>
                            <th>Titre colonne 2</th>
                        </tr> */}
            <thead>
              <tr>
                <th colSpan="3">Prestations:</th>
              </tr>
            </thead>
            <tbody>
              {resumeData.prestations &&
                resumeData.prestations.map((item) => (
                  <tr>
                    <th scope="row">{item.name}</th>
                    <td>{item.describe}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Link to="/contact">
            <div className="evenCarousel">
              <button className="contactButton">Obtenir un devis</button>
            </div>
          </Link>
        </Col>
      </div>
    </div>
  );
};

export default Mariage;
