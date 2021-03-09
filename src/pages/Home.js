import React from 'react';
import TakeStockList from "./component/TakeStockList";
import Row from "../components/Row";
import Col from "../components/Col";
import TakeStockDetail from "./component/TakeStackDetail";
import Spacer from "../components/Spacer";
import './component/style.scss'
import {useEffect} from "react";

const Home = () => {


  return (
    <Col style={{
      width: '80%',
      height: '80vh'
    }}>
      <Row center>
        <h2 style={{color: 'white'}}>React Exchange</h2>
      </Row>
      <Row>
        <Col flex style={{height: '80vh'}}>
          <TakeStockList/>
        </Col>
        <Spacer right/>
        <Col flex style={{height: '80vh'}} className={"card"}>
          <TakeStockDetail/>
        </Col>
      </Row>
    </Col>
  );
};

export default Home;