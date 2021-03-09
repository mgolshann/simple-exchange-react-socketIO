import React from 'react';

const TakeStockItem = ({data}) => {
  return (
    <tr>
      <td>{data.symbol}</td>
      <td>{data.volume}</td>
      <td>
        {data.lastPrice + " "}
        <span style={{color: data.lastPricePercent > 0 ? 'green' : 'red'}}>{Math.abs(data.lastPricePercent)}%</span>
      </td>
      <td>{data.value}</td>
    </tr>
  );
};

export default TakeStockItem;