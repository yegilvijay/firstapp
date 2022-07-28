
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../component/sidenav'
import TopHaeder from "../component/header";
function Authlayout(props) {   
    return (
        <>

        <Container>
          <Row className="align-items-center">
            <Col md={3}></Col><Col md={6}> {props.children}</Col><Col md={3}></Col>
          </Row>
        </Container>
        
       


        </>
    );
}

export default Authlayout;