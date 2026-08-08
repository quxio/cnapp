import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import "./index.css";
import Feed from "./Feed.jsx";
import Login from "./Login.jsx";


createRoot(document.getElementById("REACTROOT")).render(
  <StrictMode>
    <ConvexAuthProvider client={new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)}>
      <RouterProvider router={
        createBrowserRouter([{
          path: "/",
          element: <Outlet/>,
          children: [
            {path: "/", element: <Feed/>},
            {path: "login", element: <Login/>},
          ]
        }])
      }/>
    </ConvexAuthProvider>
  </StrictMode>,
);
