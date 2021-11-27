import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configurStore from './store/configurStore';
import {blogAdd,blogRemove,blogEdit} from './actions/blogs';
//blog item 

const store = configurStore();



store.subscribe(()=>{
  console.log(store.getState());
  
  })
const blog1 = store.dispatch(blogAdd({title:"blog1", description:"desc1", dateAdded: new Date()} ));
const blog2 = store.dispatch(blogAdd({title:"blog2", description:"desc2", dateAdded: new Date()} ));
const blog3 = store.dispatch(blogAdd({title:"blog3", description:"desc3", dateAdded: new Date()} ));



// console.log(blog1.blog.id);
store.dispatch(blogRemove({id:blog3.blog.id}))
store.dispatch(blogEdit(blog2.blog.id, {title:"update"}))




const App=()=>{
  return(
   <AppRouter /> 
  );
}


ReactDOM.render( <Provider store={store}><App /></Provider> ,document.getElementById('root')
);






















