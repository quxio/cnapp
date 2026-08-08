import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById("REACTROOT")).render(
  <StrictMode>
    <ConvexAuthProvider client={convex}>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
    </ConvexAuthProvider>
  </StrictMode>,
);
