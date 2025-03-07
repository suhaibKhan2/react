import React from "react";

// Memoized Counter Component
const Counter = React.memo(({ count, text }) => {
  console.log(`Rendering Counter: ${text}`);
  return (
    <p>
      {text}: {count}
    </p>
  );
});

export default Counter;
