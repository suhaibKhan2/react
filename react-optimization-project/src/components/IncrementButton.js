import React from 'react'; // Required for JSX
import PropTypes from 'prop-types'; // Optional for prop validation

const IncrementButton = React.memo(({ onClick, label, className }) => {
  console.log(`${label} button component rendered`);
  
  return (
    <button 
      onClick={onClick}
      className={`increment-button ${className}`}
    >
      {label}
    </button>
  );
});

// Prop validation (optional)
IncrementButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default IncrementButton;