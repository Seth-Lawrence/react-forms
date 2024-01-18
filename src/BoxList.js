import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
import Box from './Box';

/**
 * manages list of boxes
 *
 * state:
 * -array of boxes [{height, width, backgroundColor, id,}]
 *
 * boxlist --> box
 *
 */

//TODO: get rid of warning in console

function BoxList() {
  const[boxes, setBoxes] = useState([]);

  /**
   *
   *renders box in the DOM
   */
  function renderBoxes() {
    return (
        <ul>
          {boxes.map(box =>   (
              <Box
                height={box.height}
                width={box.width}
                backgroundColor={box.backgroundColor}
                id={box.id}
                removeBox = {removeBox}
                key={box.id}
              />
          ))}
        </ul>
    );
  }

  /**
   *
   * adds new box to list
   */

  function addBox(box) {
    let newBox = {...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  /**

   * removes box from list
   */


  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => id !== box.id));
  }
//TODO: className should be exactly as your component is written (boxList instead of box)
  return (
    <div className='box'>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>

  )
}

export default BoxList;
