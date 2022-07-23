
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../component/sidenav'
function Adminlayout(props) {   
    return (
        <>
          <Container>
      <Row>
        <Col><Sidenav /></Col>
      </Row>
      <Row>
        <Col>
        {props.children}
        </Col>
      </Row>
    </Container>
        </>
    );
}

export default Adminlayout;