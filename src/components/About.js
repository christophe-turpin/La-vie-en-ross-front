import React, { useState } from "react";
import "./about.css";
import {
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import resumeData from "../assets/resumeData";
import { Link } from "react-router-dom";

const About = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="about">
      <div className="columns">
        <Col className="image" lg="4" md="2">
          <img className="Alex" src={resumeData.aboutPic} alt="alex" />
        </Col>
        <Col lg="8" md="9">
          <h1 className="presentation">
            {resumeData.name} - {resumeData.role}
            {/* <img className="LogoNuage" src={resumeData.logo} alt="logoNuage" /> */}
          </h1>
          <h3 className="soutitle">{resumeData.aboutTitle}</h3>
          {resumeData.aboutText1 &&
            resumeData.aboutText1.map((item) => (
              <p className="me" key={item}>
                {item}
              </p>
            ))}
          <p className="me">{resumeData.aboutText2}</p>
          <Row id="degreeRow">
            {resumeData.weddingDegree &&
              resumeData.weddingDegree.map((item) => (
                <div className="degreeDiv" key={item.degreeImage}>
                  <img
                    src={item.degreeImage}
                    alt={item.degreeName}
                    width="50px"
                    onClick={toggle}
                  />
                  <Modal id="Modal" isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} charCode="Y">
                      {item.degreeName}
                    </ModalHeader>
                    <ModalBody id="ModPresta">
                      <img
                        src={item.degreeImage}
                        alt={item.degreeName}
                        width="100%"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <button className="contactButton" onClick={toggle}>
                        Fermer
                      </button>
                    </ModalFooter>
                  </Modal>
                </div>
              ))}
          </Row>
          <p className="me">{resumeData.aboutText3}</p>
          <p className="aboutFinal">{resumeData.aboutFinal}</p>
          <Row className="prestationRow">
            <h4 className="aboutCategory">Prestations :</h4>
            <Link className="prestaclick" to="/mariage">
              <p className="prestaclick">Mariage</p>
            </Link>
            <Link className="prestaclick" to="/brunch">
              <p className="prestaclick">Brunch</p>
            </Link>
            <Link className="prestaclick" to="/evenementiel/anniversaire">
              <p className="prestaclick">Evenementiel</p>
            </Link>
            <Link className="prestaclick" to="/professionnel">
              <p className="prestaclick">Professionnel</p>
            </Link>
          </Row>
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

export default About;
