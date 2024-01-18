import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
import Box from './Box';


function BoxList() {
  const[boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
        <ul>
          {boxes.map(box =>   (
              <Box
                height={box.height}
                width={box.width}
                backgroundColor={box.backgroundColor}
                id={box.id}
              />
          ))}
        </ul>
    );
  }

  function addBox(box) {
    let newBox = {...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div className='box'>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>

  )
}

export default BoxList;
