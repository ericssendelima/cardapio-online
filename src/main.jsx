import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MantineProvider } from "@mantine/core";

import { theme } from "./styles/theme.js";

import "@mantine/core/styles.layer.css";
import "./styles/main.css"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
