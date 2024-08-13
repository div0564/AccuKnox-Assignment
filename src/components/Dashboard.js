import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from '../redux/actions';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleAddWidget = (categoryName, widgetName, widgetText) => {
    dispatch(addWidget(categoryName, widgetName, widgetText));
  };

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch(removeWidget(categoryName, widgetId));
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <div className="dashboard">
      <SearchBar onSearch={handleSearch} />
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets
              .filter((widget) =>
                widget.name.toLowerCase().includes(searchTerm)
              )
              .map((widget) => (
                <Widget
                  key={widget.id}
                  categoryName={category.name}
                  widget={widget}
                  onRemove={handleRemoveWidget}
                />
              ))}
          </div>
          <AddWidgetForm categoryName={category.name} onAddWidget={handleAddWidget} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
