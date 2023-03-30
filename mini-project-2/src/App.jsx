import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import Spells from "./pages/Spells";
import ResponsiveAppBar from "./components/MUIAppBar";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
