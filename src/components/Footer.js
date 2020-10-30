import React from "react";
import "./footer.css";
import { Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import resumeData from "../assets/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <Col id="presta" lg="9" >
        {resumeData.prestataires &&
          resumeData.prestataires.map((item) => (
            <a href={item.website} target="blank">
              <Card className="prestacard" key={item.name}>
                <CardImg
                  className="cardImg"
                  top
                  width="auto"
                  height="auto"
                  src={item.logo}
                  alt={item.name}
                />
                <CardBody>
                  <CardTitle className="cardTitle">{item.name}</CardTitle>
                  {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                  {/* <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button> */}
                </CardBody>
              </Card>
            </a>
          ))}
      </Col>
    <Col id='mobilePresta' md="3">
        <button className='contactButton'>Afficher les prestataires</button>
    </Col>
      <Col lg="3" md="9" className="devContent">
        <h4 className="devTitle">Ce site a été crée par :</h4>
        <div className="devResponse">
          {resumeData.devs &&
            resumeData.devs.map((item) => (
              <div className="devItem">
                <p className="devName">{item.name}</p>
                <a href={item.url} target="blank">
                  <img
                    src={item.logo}
                    className="logodev"
                    alt={`logo dev`}
                  />
                </a>
              </div>
            ))}
        </div>
      </Col>
    </div>
  );
};

export default Footer;
