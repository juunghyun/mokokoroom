import React from 'react';
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import TestPage from "./components/pages/TestPage";
import AccPage from "./components/pages/AccPage";
import RankPage from "./components/pages/RankPage";
import DpsPage from "./components/pages/DpsPage";

const App = () => {
  return (
      <Routes>
          <Route path = '/' element={<MainPage />} />
          <Route path = '/main' element={<MainPage />} />
          <Route path = '/test' element={<TestPage />} />
          <Route path = '/dps' element={<DpsPage />} />
          <Route path = '/acc' element={<AccPage />} />
          <Route path = '/rank' element={<RankPage />} />
      </Routes>
  );
}

export default App;