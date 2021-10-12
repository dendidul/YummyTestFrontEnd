import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Nav from './components/nav'
import Menu from './components/menu'
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './pages/products/Products';
import Users from './pages/users';
import Register from './pages/register';
import Login from './pages/login';
import ProductCreate from './pages/products/ProductCreate';
import ProductEdit from './pages/products/ProductEdit';
import ProductInfinite from './pages/products/productInfinite';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Route path={'/'} exact component={Products} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/register'} exact component={Register} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/products/create'} exact component={ProductCreate}/>
        <Route path={'/products/:id/edit'} exact component={ProductEdit}/>
      <Route path={'/productinfinite'} exact component={ProductInfinite}></Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
