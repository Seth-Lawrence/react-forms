import React, { useState } from 'react';

/**
 *
 * Box: render a box
 *
 * props: box.height, box.width, box.backgroundColor, box.id, removeBox()
 */

function Box({height, width, backgroundColor, id, removeBox}) {

  const myStyle = {
    height: Number(height),
    width: Number(width),
    backgroundColor: backgroundColor
  }

  return (
    <>
      <div className="Box" style={myStyle}>
      </div>
      <button onClick={() => removeBox(id)}>X</button>
    </>
  );
};

export default Box;