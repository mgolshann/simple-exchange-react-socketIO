import React from 'react';

const Spacer = ({left, right, top, bottom, size}) => {
  const getSize = () => {
    switch (size) {
      case "tiny":
        return "0.5rem";
      case "small":
        return "1rem";
      case "medium":
        return "2rem";
      case "big":
        return "3rem";
        default:
        return "1rem"
    }
  }
  const style = {};
  if (left)
    style.marginLeft = getSize();
  if (right)
    style.marginRight = getSize();
  if (top)
    style.marginTop = getSize();
  if (bottom)
    style.marginBottom = getSize();
  return (
    <div style={style}/>
  );
};

export default Spacer;