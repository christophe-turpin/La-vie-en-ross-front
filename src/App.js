import React from "react";
import { Container } from "reactstrap";
import AnimBorder from "./components/AnimBorder";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import Router from "./Router";

function App() {
  return (
    <Container fluid="l">
      <NavMenu />
      <AnimBorder />
      <Router />
      <Footer />
    </Container>
  );
}

export default App;
