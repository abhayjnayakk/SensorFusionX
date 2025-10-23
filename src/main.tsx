import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Main.tsx is loading...");

// Add error boundary for debugging
try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log("React app mounted successfully!");
} catch (error) {
  console.error("Error mounting React app:", error);
}
