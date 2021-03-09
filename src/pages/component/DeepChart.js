import React from 'react';
import Row from "../../components/Row";
import Col from "../../components/Col";
import Spacer from "../../components/Spacer";

const BuyOffer = ({offer}) => {
  const percent=Math.floor(Math.random()*100);
  return <Row style={{
    fontSize: '0.8rem',
    padding : '0.1rem',
    marginBottom : '0.2rem',
    background: `linear-gradient(90deg, ${offer.type === "sell" ? "#E74C3C88" : "#1ABC9C88"} ${percent}%, transparent 0%)`
  }}>
    <p className={"countCol"}>{offer.count}</p>
    <Row flex>
      <Spacer left/>
      <p style={{marginLeft: 'auto'}}>{offer.price}</p>
      <p>{offer.volume}</p>
    </Row>
  </Row>;
};

const SellOffer = ({offer}) => {
  const percent=Math.floor(Math.random()*100);
  return <Row style={{
    fontSize: '0.8rem',
    padding : '0.1rem',
    marginBottom : '0.2rem',
    background: `linear-gradient(90deg, transparent ${percent}%, ${offer.type === "sell" ? "#E74C3C88" : "#1ABC9C88"} 0%)`
  }}>
    <Row flex>
      <p>{offer.volume}</p>
      <p style={{marginRight: 'auto'}}>{offer.price}</p>
      <Spacer left/>
    </Row>
    <p className={"countCol"}>{offer.count}</p>
  </Row>;
};

const DeepChart = ({offers}) => {
  return (
    <Row>
      <Col flex>
        <Row style={{fontSize: '0.8rem'}}>
          <p className={"countCol"}>تعداد</p>
          <Row flex>
            <Spacer left/>
            <p style={{marginLeft: 'auto'}}>حجم</p>
            <p>قیمت</p>
          </Row>
        </Row>
        {offers.filter(item => item.type === "buy").map(item => <BuyOffer offer={item}/>)}
      </Col>
      <Spacer left/>
      <Col flex>
        <Row style={{fontSize: '0.8rem'}}>
          <Row flex>
            <p>قیمت</p>
            <p style={{marginRight: 'auto'}}>حجم</p>
            <Spacer left/>
          </Row>
          <p className={"countCol"}>تعداد</p>
        </Row>
        {offers.filter(item => item.type === "sell").map(item => <SellOffer offer={item}/>)}
      </Col>
    </Row>
  );
};

export default DeepChart;