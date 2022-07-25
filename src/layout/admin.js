
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../component/sidenav'
import TopHaeder from "../component/header";
function Adminlayout(props) {   
    return (
        <>

    <div>
      <Sidenav/>

        <main>
         
         <TopHaeder header={props.headername}/>
          <Row>
            <Col> {props.children}</Col>
          </Row>
        
        </main>

    </div>



        </>
    );
}

export default Adminlayout;