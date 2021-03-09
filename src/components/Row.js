import React from 'react';
import Spacer from "./Spacer";

const Row = ({children, center, gap,flex, style = {}}) => {
  return (
    <div style={{display: 'flex', flexDirection: "row",flex : flex &&1, justifyContent: center && 'center', ...style}}>
      {children}
    </div>
  );
};

export default Row;