import React, { useEffect } from "react"; 
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CategorySection from "./pages/CategorySection";

function App() {
  
  
  useEffect(() => {
   
    const savedColor = localStorage.getItem("selectedColor");
    
    
    if (savedColor) {
      document.documentElement.style.setProperty("--color-primary", savedColor);
    }
  }, []); 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategorySection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;