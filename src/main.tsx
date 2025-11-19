import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

// CSS globales del template original + tus CSS
import "./css/normalize.css";
import "./css/bootstrap.css";
import "./css/animate.css";
import "./css/transition-animations.css";
import "./css/jquery.mCustomScrollbar.min.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.css";
import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
