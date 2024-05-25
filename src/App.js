import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Main from "./components/Main";
import LinearRegression from "./components/projects/LinearRegression";
import DigitRecognizer from "./components/projects/DigitRecognizer";
import PCA from "./components/projects/PCA";

function App() {
  return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/linearregression" element={<LinearRegression/>}></Route>
            <Route path="/digitrecognizer" element={<DigitRecognizer/>}></Route>
            <Route path="/pca" element={<PCA/>}></Route>
          </Routes>
        </HashRouter>
  );
}

export default App;
