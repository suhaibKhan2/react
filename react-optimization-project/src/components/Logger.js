import React from 'react'; // Add this import

// Regular Logger component
const Logger = ({ name, className }) => {
  console.log(`Logger component "${name}" rendered`);
  
  return (
    <div className={`logger ${className}`}>
      I'm a logger named "{name}" - check console to see when I render
    </div>
  );
};

// Memoized version of Logger
export const MemoizedLogger = React.memo(Logger);

// Add default export
export default Logger;