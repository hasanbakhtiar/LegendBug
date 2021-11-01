import React from 'react'
import Header from './Header'
import Card from './Card'
import img1 from '../img1.jfif'

const App = () => {
    return (
        <div>
            <Header />
            <div className="row">
                <Card img={img1} title="Hello" desc="Desk1" />
                <Card img={img1} title="Hello" desc="Desk1" />
                <Card img={img1} title="Hello" desc="Desk1" />
            </div>
        </div>
    )
}

export default App
