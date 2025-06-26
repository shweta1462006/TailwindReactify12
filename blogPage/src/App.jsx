import React from 'react';
import Header from "./components/Header/Header"
import Home from "./components/Home"
import Second from "./components/Online/Second"
import Counter from "./components/Counter"
import { Routes, Route } from "react-router-dom";
import TestCounter from './components/Online/TestCounter';


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home/>} />

        <Route path="/Counter3" element={<TestCounter color="yellow" />} />
        <Route path="/Second" element={<Second />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </>
  )
}
