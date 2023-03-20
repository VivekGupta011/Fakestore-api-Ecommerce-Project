import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsItem from "./component/ProductsItem";
import Manatee from './Manatee';
import Narwhal from './Narwhal';
import { Cart } from './component/Cart';
import { Provider } from 'react-redux';
import Whale from './Whale';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import NavbarComponent from './NavbarComponent';

function App() {
  const[count,setCount]=useState(0);
  const[total,setTotal]=useState(0);
  
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div className="container" style={{ maxWidth: "100%", padding: 0 }}>
            <NavbarComponent Count={count} Total={total}></NavbarComponent>
            <Routes>
              <Route exact path='/' element={< ProductsItem Count={count} Total={total} setCount={setCount} setTotal={setTotal}/>}></Route>
              <Route exact path='/cart' element={< Cart Count={count} Total={total} setCount={setCount} setTotal={setTotal} />}></Route>
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>


  );
}

export default App;
