import React from 'react'
import Product from './Product'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'

const App = () => {
    return (
        <div>
            <CartProvider>
            <Product />
            <Cart />
            </CartProvider>

        </div>
    )
}

export default App
