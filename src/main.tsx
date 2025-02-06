import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import { Navbar } from "./layouts/Navbar.tsx";
import { Footer } from "./layouts/Footer.tsx";
import { Body } from "./layouts/Body.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen gap-y-4">
      <Navbar />
      <Body />
      <Footer />
    </div>
  </StrictMode>
);
