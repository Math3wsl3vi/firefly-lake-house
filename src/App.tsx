import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccommodationDetail from "./components/sections/AccommodationDetail";
import { HomePage } from "./pages/Home";
export function App() {
  return <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
        <Route path="/accommodations/:id" element={<AccommodationDetail />} />
          </Routes>
      </BrowserRouter>;
}