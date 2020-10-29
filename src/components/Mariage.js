import React from "react";
import "./mariage.css";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Table
} from "reactstrap";
import resumeData from "../assets/resumeData";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Mariage = () => {
  return (
    <div className="about" id="about">
      <div className="columns">
        <Col className="image" md="4">
          <img className="Alex" src={resumeData.mariagePic} alt="alex" />
        </Col>
        <Col md="8">
          <div id="ct">
            <div class="corner " id="left_top"></div>
            <div class="corner" id="left_bottom"></div>
            <div class="corner" id="right_top"></div>
            <div class="corner" id="right_bottom"></div>
            <span>{resumeData.mariageAuth}</span>
            <blockquote id="quote">
              <p>
                <i id="iquote">&ldquo;{resumeData.mariageCit} &rdquo; </i>
              </p>
            </blockquote>
          </div>
          <h1>{resumeData.mariageh1}</h1>
          <h2>{resumeData.mariageh2}</h2>
          <div id="carDiv">
            <Carousel carousel={resumeData.carousel} />
          </div>
          <h2>{resumeData.mariageWelcome}</h2>
          <h3>{resumeData.mariageEntour}</h3>
          <div id="presta">
            {resumeData.prestataires &&
              resumeData.prestataires.map((item) => (
                <Card className='prestacard' key={item.name}>
                  <CardImg
                    className="cardImg"
                    center
                    width= "auto"
                    height="auto"
                    src={item.logo}
                    alt={item.name}
                  />
                  <CardBody>
                    <CardTitle className='cardTitle'>{item.name}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    {/* <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button> */}
                  </CardBody>
                </Card>
              ))}
          </div>
          <Table hover id='mariagePrices'>
            {/* <caption>Prestations: </caption> */}

            {/* <tr>
                            <th>Titre colonne 1</th>
                            <th>Titre colonne 2</th>
                        </tr> */}
            <thead>
            <tr>
            <th colspan="3">Prestations:</th>
            </tr>
            </thead>
            <tbody>
              {resumeData.prestations && resumeData.prestations.map(item =>
                <tr>
                  <th scope='row'>{item.name}</th>
                  <td>{item.describe}</td>
                  <td>{item.price}</td>
                </tr>
              )} 
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
