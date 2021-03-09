import React from 'react';
import Row from "../../components/Row";
import Col from "../../components/Col";
import DeepChart from "./DeepChart";
import Spacer from "../../components/Spacer";

const takeStack = {
  symbol: "دارا یکم",
  description: "پالایش نفت اصفهان",
  lastPrice: 2530,
  lastPricePercent: "5",
  volume: 2400,
  value: 12000000,
  offers: [
    {
      price: 48150,
      volume: 563785000,
      count: 20,
      type: "buy"
    },
    {
      price: 48140,
      volume: 500000,
      count: 2,
      type: "buy"
    },
    {
      price: 48130,
      volume: 300000,
      count: 3,
      type: "buy"
    },
    {
      price: 48100,
      volume: 1400000,
      count: 1,
      type: "buy"
    },
    {
      price: 48090,
      volume: 220000,
      count: 1,
      type: "buy"
    },
    {
      price: 48000,
      volume: 455560000,
      count: 10,
      type: "sell"
    },
    {
      price: 47900,
      volume: 56560000,
      count: 5,
      type: "sell"
    },
    {
      price: 47800,
      volume: 200000,
      count: 3,
      type: "sell"
    },
    {
      price: 47000,
      volume: 35000,
      count: 1,
      type: "sell"
    },
    {
      price: 46990,
      volume: 220000,
      count: 1,
      type: "sell"
    },
  ]
};

const Header = ({data}) =>
  <>
    <Row>
      <Col>
        <h2>{data.symbol}</h2>
        <h5>{data.description}</h5>
      </Col>
      <Row style={{marginRight: 'auto'}}>
        <span style={{color : data.lastPricePercent >0 ? "green":"red"}}>{Math.abs(data.lastPricePercent)+"%"}</span>
        <Spacer size={"tiny"} left/>
        <span>{data.lastPrice}</span>
      </Row>
    </Row>
    <Spacer top/>
    <Row style={{backgroundColor: "#ECF0F1", borderRadius: '0.2rem',padding :'0.5rem'}}>
      <Col style={{marginLeft: 'auto'}}>قسمت پایانی : {data.value}</Col>
      <Col>حجم : {data.volume}</Col>
    </Row>
    <Spacer top/>
  </>;


const TakeStackDetail = () => {
  return (
    <>
      <Header data={takeStack}/>
      <DeepChart offers={takeStack.offers}/>
    </>
  );
};

export default TakeStackDetail;