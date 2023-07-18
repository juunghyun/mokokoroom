import React from 'react';
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/TestPage";
import TestPage from "./components/pages/MainPage";

const App = () => {
  return (
      <Routes>
          <Route path = '/' element={<MainPage />} />
          <Route path = '/main' element={<MainPage />} />
          <Route path = '/test' element={<TestPage />} />
      </Routes>
  );
}

export default App;