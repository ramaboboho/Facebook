import React, {Component} from "react";
import {NavbarComponent, SidebarKiri, SidebarKanan, Main} from "./components";
import {Row, Col} from "react-bootstrap";

export default class App extends Component{
  render() {
    return (
      <>
      <NavbarComponent></NavbarComponent>
      <Row className="mt-5"> 
        <Col lg={3} className="mt-5">
          <SidebarKiri/>
        </Col>
        <Col lg={6} className="mt-5">
        <Main/>
        </Col>
        <Col lg={3} className="mt-5">
          <SidebarKanan/>
        </Col>
      </Row>
      </>
    )
  }
}