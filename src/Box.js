import React, { useState } from 'react';

function Box({height, width, backgroundColor, id}) {

  const myStyle = {
    height: height + 'px',
    width: width + 'px',
    backgroundColor: backgroundColor
  }

  return (
    <div className="Box" key={id} style={{myStyle}}>
    </div>
  )
};

export default Box;