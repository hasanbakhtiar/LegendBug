import React from 'react'
import Product from './Product'
import Cart from './Cart'
import Nav from './Nav'
import { CartProvider } from 'react-use-cart'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <CartProvider>
            <Nav />
            <Route path="/" exact component={Product}></Route>
            <Route path="/cart" component={Cart}></Route>
            </CartProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default App

