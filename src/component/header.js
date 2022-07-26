
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopHaeder(props) {               
    return (
        
        <>


        <Row>
            <Col md="12">
                <h2>{props.header}</h2>
                </Col>
          </Row>

        </>
    );
}

export default TopHaeder;