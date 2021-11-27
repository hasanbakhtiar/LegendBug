import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header'
import Home from '../components/HomePage'
import BlogPage from '../components/BlogPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                    <Switch>
                            <Route path="/" component={Home} exact></Route>
                            <Route path="/blog" component={BlogPage}></Route>
                            <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
                            <Route path="/contact" component={Contact}></Route>
                            <Route  component={NotFound}></Route>

                    </Switch>


            </BrowserRouter>
        </div>
    );
}

export default AppRouter
