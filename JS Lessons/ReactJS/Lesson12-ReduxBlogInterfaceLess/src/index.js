import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';

// Blog APP

//blog add (creater)
const blogAdd = ({title="",description="",dateAdded=0})=>({
  type:"ADD_BLOG",
  blog:{
    id: uuid(),
    title:title,
    description: description,
    dateAdded: dateAdded
  }
});
//blog remove

const blogRemove = ({id})=>(
  {
    type: "REMOVE_BLOG",
    id:id
  }
)


//blog edit
const blogEdit = (id,updates)=>(
  {
    type: "EDIT_BLOG",
    id,
    updates
  }
)

//blog item 

const blogState = [];

const blogReducer = (state=blogState,action)=>{
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        action.blog
      ]
      case "REMOVE_BLOG":
        return state.filter(({id})=>{
          return id !== action.id
        })
        case "EDIT_BLOG":
          return state.map((blog)=>{
            if (blog.id == action.id) {
              return{
                ...blog,
                ...action.updates
              }
            }
          })
    default:
      return state
  }
  }

  const auth = {};

  const authReducer = (state=auth, action)=>{
    switch (action.type) {
      default:
        return state;
    }
  }

const store = createStore(
  combineReducers({
    blog: blogReducer,
    auth: authReducer
  })
)

const blog1 = store.dispatch(blogAdd({title:"blog1", description:"desc1", dateAdded: new Date()} ));
const blog2 = store.dispatch(blogAdd({title:"blog2", description:"desc2", dateAdded: new Date()} ));
const blog3 = store.dispatch(blogAdd({title:"blog3", description:"desc3", dateAdded: new Date()} ));

store.subscribe(()=>{
console.log(store.getState());

})

// console.log(blog1.blog.id);
store.dispatch(blogRemove({id:blog3.blog.id}))
store.dispatch(blogEdit(blog2.blog.id, {title:"update"}))














ReactDOM.render(<h1></h1>,document.getElementById('root')
);






















