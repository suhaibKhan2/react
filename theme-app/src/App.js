import React, { Suspense, useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Loader from "./Loader";

// Lazy Load Components
const LazyAbout = React.lazy(() => import("./components/About"));
const LazyContact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader message="Loading app..." />}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Simulating a delay before showing components
  useEffect(() => {
    setTimeout(() => setShowAbout(true), 2000); // 2s delay for About
    setTimeout(() => setShowContact(true), 4000); // 4s delay for Contact
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* Suspense to show loading state for About */}
      <Suspense fallback={<Loader message="Loading About section..." />}>
        {showAbout ? <LazyAbout /> : <Loader message="About is loading..." />}
      </Suspense>

      {/* Suspense to show loading state for Contact */}
      <Suspense fallback={<Loader message="Loading Contact section..." />}>
        {showContact ? <LazyContact /> : <Loader message="Contact is loading..." />}
      </Suspense>
    </div>
  );
};

export default App;
