import React from "react";

// Memoized Button to prevent unnecessary re-renders
const Button = React.memo(({ handleClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return <button onClick={handleClick}>{children}</button>;
});

export default Button;
