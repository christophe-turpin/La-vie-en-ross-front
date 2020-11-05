import React from "react";
import { Row } from "reactstrap";
import "./mariage.css";

const PagesBientotDispo = () => {
  return (
    <Row id='soon'>
      <div id="ct">
        <div className="corner " id="left_top" />
        <div className="corner" id="left_bottom" />
        <div className="corner" id="right_top" />
        <div className="corner" id="right_bottom" />
        <blockquote id="GenderRevealQuote">
          <p>
            <i>&ldquo;Contenu bientôt disponible &rdquo; </i>
          </p>
        </blockquote>
      </div>
    </Row>
  );
};

export default PagesBientotDispo;
