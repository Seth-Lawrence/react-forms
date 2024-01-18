import React, { useState } from 'react';

function Box({height, width, backgroundColor}) {

  const myStyle = {
    height,
    width,
    backgroundColor
  }

  return (
    <div className="Box" style={myStyle}>
    </div>
  )
};