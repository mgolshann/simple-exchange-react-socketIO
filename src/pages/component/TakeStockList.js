import React from 'react';
import TakeStockItem from "./TakeStockItem";
import './style.scss'
import Row from "../../components/Row";
import Col from "../../components/Col";
import { useExchangeState } from '../../context/ExchangeContext';

const TakeStockList = () => {

  const {balance, tavanKharid, takeStocks} = useExchangeState();
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
          {takeStocks.map(item => <TakeStockItem data={item}/>)}
          </tbody>
        </table>
      </div>
      <Row style={{
        background: '#BDC3C7',
        borderRadius: '0 0 1rem 1rem',
        padding: '0.5rem',
      }}>
        <p>دارایی شما : </p>
        <p style={{marginLeft: 'auto'}}>{balance}</p>
        <p>توان خرید : </p>
        <p>{tavanKharid}</p>
      </Row>
    </Col>
  );
};

export default TakeStockList;