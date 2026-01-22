// src/components/RouteChangeHandler.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

// Configure nprogress
nprogress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: "ease",
  speed: 500,
});

export default function RouteChangeHandler() {
  const location = useLocation();

  useEffect(() => {
    // Start progress bar when location changes
    nprogress.start();

    // Complete progress bar after a short delay
    // This simulates the page loading
    const timer = setTimeout(() => {
      nprogress.done();
    }, 1000);

    return () => {
      clearTimeout(timer);
      nprogress.done();
    };
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
