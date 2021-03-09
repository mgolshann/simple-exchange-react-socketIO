import React from 'react';
import TakeStockList from "./component/TakeStockList";
import Row from "../components/Row";
import Col from "../components/Col";
import TakeStockDetail from "./component/TakeStackDetail";
import Spacer from "../components/Spacer";
import './component/style.scss'
import { useEffect } from "react";
import socketIO from 'socket.io-client';
import { setTackStocks, setUserBalances, useExchangeDispatch } from '../context/ExchangeContext';


const Home = () => {

  const exchangeDispatch = useExchangeDispatch();

  const socket = React.useRef(socketIO('http://localhost:3010/socket',
    { transports: ['websocket', 'polling', 'flashsocket'] }
  ));
  useEffect(() => {
    socket.current.on("balance", (data) => {
      setUserBalances(exchangeDispatch, data.balance, data.tavanKharid);
    })
    socket.current.on("tackStockList", (list) => {
      setTackStocks(exchangeDispatch, list)
    })
  }, []);

  return (
    <Col style={{
      width: '80%',
      height: '80vh'
    }}>
      <Row center>
        <h2 style={{ color: 'white' }}>React Exchange</h2>
      </Row>
      <Row>
        <Col flex style={{ height: '80vh' }}>
          <TakeStockList />
        </Col>
        <Spacer right />
        <Col flex style={{ height: '80vh' }} className={"card"}>
          <TakeStockDetail />
        </Col>
      </Row>
    </Col>
  );


};

export default Home;