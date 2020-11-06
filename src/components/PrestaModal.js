import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import resumeData from "../assets/resumeData";
import "./PrestaModal.css";

export default function PrestaModal(props) {
  const { buttonLabel } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="contactButton" onClick={toggle}>
        {buttonLabel}
      </button>
      <Modal id="Modal" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} charCode="Y">
          Ils me font confiance:
        </ModalHeader>
        <ModalBody id="ModPresta">
          {resumeData.prestataires &&
            resumeData.prestataires.map((item) => (
                <a href={item.website} target="blank">
                    <img className="ModalcardImg" src={item.logo} alt={item.name} />
                    <p className="ModalcardTitle">{item.name}</p>
                </a>
            ))}
        </ModalBody>
        <ModalFooter>
          <button className="contactButton" onClick={toggle}>
            Fermer
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
