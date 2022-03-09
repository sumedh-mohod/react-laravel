import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

const Index = () => {
  return (
    <>
    <Router>
       <Header/>
       <h1>E-comm</h1>
       <Routes>
            <Route path='/login' element={<Login/>}>
            </Route>
            <Route path='/register' element={<Register/>}>
            </Route>
            <Route path='/add' element={<AddProduct/>}>
            </Route>
            <Route path='/update' element={<UpdateProduct/>}>
            </Route>
       </Routes>
    </Router>
    </>

  )
}

export default Index
ReactDOM.render(<Index/>,document.getElementById("react-app"));
