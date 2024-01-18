import React, { useState } from 'react';

/**
 * Form for creating new box to add to a list
 *
 * Has a state for the height, width and background color
 * sends the {height, width, backgroundColor} to addBox function rec'd from
 * parent
 *
 * boxlist --> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = {height: '0', width: '0', backgroundColor: ''};
  const [formData, setFormData] = useState(initialState);

  /**
   *
   * send {height, width, backgroundColor} to parent
   * and clearing form
   */

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  };

  /**
   * Update local state with current elements
   */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;