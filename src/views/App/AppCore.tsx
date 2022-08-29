import "./App.scss";
import React from "react";
import EngineModule from "../../modules/engine/layout/EngineModule";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppCore() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<EngineModule />} path="/*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppCore;
