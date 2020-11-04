import React from "react";
import "./partenaire.css";
import { Col, Row, Table } from "reactstrap";
import resumeData from "../assets/resumeData";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Partenaire = () => {
    return (
            <div>
                <blockquote id="quote">
              <p>
                <i id="iquote">&ldquo;{resumeData.partenaireCit} &rdquo; </i>
              </p>
            </blockquote>
            </div>
    );
};

export default Partenaire;