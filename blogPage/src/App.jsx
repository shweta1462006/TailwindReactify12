import React from 'react';
import Header from"./components/Header/Header"
import Home from "./components/Home"
import Second from "./components/Online/Second"
import Counter from "./components/Counter"





import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
<Header/>
<Routes>
    <Route path="/Home" element={<Home />} />
        <Route path="/Second" element={<Second/>} />
                <Route path="/Counter" element={<Counter/>} />


</Routes>
</>
  )
}
