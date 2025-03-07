import React, { useState, useCallback, useEffect } from 'react';
import Display from './Display';
import IncrementButton from './IncrementButton';
import Logger, { MemoizedLogger } from './Logger';

const Counter = React.memo(() => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Optimized callback for count
  const incrementCount = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  // Optimized callback for otherState
  const memoizedIncrementOtherState = useCallback(() => {
    setOtherState(prev => prev + 1);
  }, []);

  // Unoptimized callback for comparison
  const badIncrement = () => {
    setCount(count + 1);
  };

  // Render tracking
  useEffect(() => {
    console.log('Counter rendered at:', performance.now());
  });

  return (
    <div className="counter-container">
      <section className="section">
        <h3>Optimized Counter</h3>
        {/* Use Display for count */}
        <Display count={count} className="display" />
        <div className="button-group">
          <IncrementButton
            onClick={badIncrement}
            label="Bad Increment (re-renders children)"
            className="danger"
          />
          <IncrementButton
            onClick={incrementCount}
            label="Good Increment (memoized)"
            className="success"
          />
        </div>
      </section>

      <section className="section">
        <h3>Other State</h3>
        {/* Use Display for otherState */}
        <Display value={otherState} className="display" />
        <IncrementButton
          onClick={memoizedIncrementOtherState}
          label="Memoized Other Increment"
        />
      </section>

      <section className="section">
        <Logger name="Non-memoized Logger" className="non-memoized" />
        <MemoizedLogger name="Memoized Logger" className="memoized" />
      </section>
    </div>
  );
});

export default Counter;