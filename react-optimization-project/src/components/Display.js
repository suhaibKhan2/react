import React from 'react';
import PropTypes from 'prop-types';

// Define the Display component
const Display = ({ count, value, className }) => {
  console.log('Display component rendered');
  
  return (
    <div className={`display ${className}`}>
      {/* Show count if it exists, otherwise show value */}
      {count !== undefined ? `Count: ${count}` : `Value: ${value}`}
    </div>
  );
};

// Add prop validation
Display.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
  className: PropTypes.string
};

// Export the component with React.memo
export default React.memo(Display);