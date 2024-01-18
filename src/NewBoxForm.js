import React, { useState } from 'react';


function NewBoxForm({ addBox }) {
  const initialState = {height: 0, width: 0, backgroundColor: ''};
  const [formData, setFormData] = useState(initialState);

}

export default NewBoxForm