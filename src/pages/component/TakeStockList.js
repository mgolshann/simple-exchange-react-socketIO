import React from 'react';
import TakeStockItem from "./TakeStockItem";
import './style.scss'
import Row from "../../components/Row";
import Col from "../../components/Col";

const data = [
  {
    symbol: "دارا یکم",
    volume: 2400,
    lastPrice: 2530,
    lastPricePercent: 5,
    value: 12000000
  },
  {
    symbol: "شپنا",
    volume: 320,
    lastPrice: 4500,
    lastPricePercent: -5,
    value: 5030000
  },
  {
    symbol: "غزر",
    volume: 100,
    lastPrice: 2000,
    lastPricePercent: 2,
    value: 280000
  },
  {
    symbol: "آبادا",
    volume: 300,
    lastPrice: 1500,
    lastPricePercent: 1,
    value: 450000
  },
];

const TakeStockList = () => {


  return (
    <Col className={"card"} style={{height: '100%', position: 'relative'}}>
      <div style={{flex: 1,}}>
        <table style={{width: '100%'}} cellSpacing={0}>
          <thead>
          <tr>
            <th>نماد</th>
            <th>دارایی</th>
            <th>آخرین قیمت</th>
            <th>ارزش سهم</th>
          </tr>
          </thead>
          <tbody>
          {data.map(item => <TakeStockItem data={item}/>)}
          </tbody>
        </table>
      </div>
      <Row style={{
        background: '#BDC3C7',
        borderRadius: '0 0 1rem 1rem',
        padding: '0.5rem',
      }}>
        <p>دارایی شما : </p>
        <p style={{marginLeft: 'auto'}}>{200000}</p>
        <p>توان خرید : </p>
        <p>{120000}</p>
      </Row>
    </Col>
  );
};

export default TakeStockList;