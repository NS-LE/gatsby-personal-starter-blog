import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout";
import Register from "./components/register";
import Procedures from "./components/procedures";
import Doctors from "./components/doctors";
import NoPage from "./components/NoPage";
import React, { useState, useEffect } from 'react';


export default function Posts()  {

    return (
  
    <div style={{ padding: 20, alignItems: "center" }}>
    <Router>          
    <Routes>  
    <Route path="/" element={<Layout />}>
      <Route exact path="doctors" index element={<Doctors />}/>
      <Route exact path="register" element={<Register />} />
      <Route exact path="procedures" element={<Procedures />} />
      <Route exact path="*" element={<NoPage />} />
    </Route>
  </Routes>
  </Router>
    </div>
    )
}
