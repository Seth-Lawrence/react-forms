import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';


function BoxList() {
  const[boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
        <ul>
          {boxes.map(box => (
              <li>
                <Box //STUFF HERE/>
              </li>
          ))}
        </ul>
    );
  }

  function addBox({height, width, backgroundColor}) {


  }

  return (
    <div className='box'>
      <NewBoxForm addBox={addBox} />

    </div>

  )
}

