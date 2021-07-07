import React from "react";
import "./mariage.css";
import { Col } from "reactstrap";
import resumeData from "../assets/resumeData";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Brunch = () => {
  return (
    <div className="about">
      <div className="columns">
        <Col className="image" lg="4">
          <img className="Alex" src={resumeData.mariagePic} alt="alex" />
        </Col>
        <Col className="brunchContent" lg="8" md="12">
          <div id="ct">
            <div className="corner " id="left_top"></div>
            <div className="corner" id="left_bottom"></div>
            <div className="corner" id="right_top"></div>
            <div className="corner" id="right_bottom"></div>
            <blockquote id="brunchQuote">
              <p>
                <i className="brunchiquote">
                  &ldquo;{resumeData.brunchCit[0]} &rdquo;{" "}
                </i>
              </p>
              <hr width="40%" />
              <p>
                <i className="brunchiquote">
                  &ldquo;{resumeData.brunchCit[1]} &rdquo;{" "}
                </i>
              </p>
            </blockquote>
          </div>
          {/* <div>
            <Table hover id="brunchPrices">
              <caption>Prestations: </caption>

              <tr>
                            <th>Titre colonne 1</th>
                            <th>Titre colonne 2</th>
                        </tr>
              <thead>
                <tr>
                  <th className="brunchth">Prestataires</th>
                  <th className="brunchth">Thématique</th>
                  <th className="brunchth">Tarif</th>
                </tr>
              </thead>
              <tbody>
                {resumeData.prestatairesBrunch &&
                  resumeData.prestatairesBrunch.map((item) => (
                    <tr key={item.name}>
                      <th scope="row">{item.name}</th>
                      <td>{item.thematique}</td>
                      <td>{item.tarifs}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div> */}
          <h1 className="presentation">{resumeData.brunchTitle}</h1>
          <h2 className="centeredItalic">{resumeData.brunchCentered}</h2>
          <p>{resumeData.brunchText}</p>
          <div className="tableButton">
            <div>
              <Link className="prestaclick" to="/contact">
                <div className="evenCarousel">
                  <button className="contactButton">Obtenir un devis</button>
                </div>
              </Link>
            </div>
          </div>
          <Carousel carousel={resumeData.brunchCarousel} />
        </Col>
      </div>
    </div>
  );
};

export default Brunch;
