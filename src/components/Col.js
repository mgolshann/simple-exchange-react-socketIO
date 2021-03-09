import React from 'react';

const Col = ({children, style = {}, className, flex}) => {
  return (
    <div className={className} style={{display: 'flex', flexDirection: "column", flex: flex && 1, ...style}}>
      {children}
    </div>
  );
};

export default Col;