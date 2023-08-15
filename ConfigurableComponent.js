import React from 'react';
import './ConfigurableComponent.scss';

const ConfigurableComponent = ({ color, text }) => {
  return (
    <div className={`configurable-component ${color}`}>
      {text}
    </div>
  );
};

export default ConfigurableComponent;