
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Authlayout(props) {   
    return (
        <>

        <Container>
          <Row className="align-items-center">
            <Col lg={3}></Col><Col lg={6}> {props.children}</Col><Col lg={3}></Col>
          </Row>
        </Container>
        
       


        </>
    );
}

export default Authlayout;