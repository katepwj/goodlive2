import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Life from './pages/Life';
import Mine from './pages/Mine';
import Shop from './pages/Shop';
import Search from './pages/Search/Search';
import City from './pages/City/City'
import NotFound from './pages/NotFound'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/life" component={Life} />
          <Route path="/mine" component={Mine} />
          <Route path="/shop" component={Shop} />
          <Route path="/search" component={Search} />
          <Route path="/city" component={City} />
          <Route path="/Login" component={Login} />
          <Route path="/detail" component={Detail} />
          <Route path="/shoppingcart" component={ShoppingCart} />



          {/* <Route path="*" component={NotFound} /> */}
          <Route component={NotFound} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}