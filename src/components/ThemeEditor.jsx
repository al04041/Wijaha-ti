import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const ThemeEditor = () => {

  const [primary, setPrimary] = useState(() => {
    return localStorage.getItem("selectedColor") || "#3b82f6";
  });

  useEffect(() => {
  
    document.documentElement.style.setProperty("--color-primary", primary);
    localStorage.setItem("selectedColor", primary);
  }, [primary]); 
  return (
    <div className="settings-sidebar">
      <h3>تخصيص المظهر</h3>
      <HexColorPicker color={primary} onChange={setPrimary} />
      <p>اللون الحالي: <b>{primary}</b></p>
    </div>
  );
};

export default ThemeEditor;
