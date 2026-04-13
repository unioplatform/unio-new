import React from "react";
import ReactDOM from "react-dom/client";
import { AppProviders } from "./system/providers";
import "@/system/styles/globals.css";

/**
 * 🛰️ API INITIALIZATION
 * Ensures API defaults are configured before app renders
 */
import { authApi } from "@unio/api";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
);