import React from 'react';

const Widget = ({ categoryName, widget, onRemove }) => {
  return (
    <div className="widget">
      <p>{widget.name}</p>
      <p>{widget.text}</p>
      <button onClick={() => onRemove(categoryName, widget.id)}>X</button>
    </div>
  );
};

export default Widget;
