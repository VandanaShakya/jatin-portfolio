import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import "./App.css"; // Import the CSS file for the custom loader

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
};

export default App;
