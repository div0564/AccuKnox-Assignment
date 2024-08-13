import React, { useState } from 'react';

const AddWidgetForm = ({ categoryName, onAddWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      onAddWidget(categoryName, widgetName, widgetText);
      setWidgetName('');
      setWidgetText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-widget-form">
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
