export const addWidget = (categoryName, widgetName, widgetText) => ({
    type: 'ADD_WIDGET',
    payload: { categoryName, widgetName, widgetText },
  });
  
  export const removeWidget = (categoryName, widgetId) => ({
    type: 'REMOVE_WIDGET',
    payload: { categoryName, widgetId },
  });
  