import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
import LinearRegression from "./components/projects/LinearRegression";
import DigitRecognizer from "./components/projects/DigitRecognizer";
import PCA from "./components/projects/PCA";
import HousePrice from "./components/projects/HousePrice"
import TodoList from "./components/projects/TodoList"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/houseprice" element={<HousePrice />}></Route>
        <Route path="/linearregression" element={<LinearRegression />}></Route>
        <Route path="/digitrecognizer" element={<DigitRecognizer />}></Route>
        <Route path="/pca" element={<PCA />}></Route>
        <Route path="/todolist" element={<TodoList />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
