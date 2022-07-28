
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

    <div>
      
        <main>
        <Container>
          <Row className="align-items-center">
            <Col></Col><Col> {props.children}</Col><Col></Col>
          </Row>
        </Container>
        
        </main>

    </div>



        </>
    );
}

export default Authlayout;