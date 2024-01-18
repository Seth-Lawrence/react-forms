import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';


function Box() {


  function addBox({height, width, backgroundColor}) {


  }

  return (
    <div className='box'>
      <NewBoxForm addBox={addBox} />

    </div>

  )
}

