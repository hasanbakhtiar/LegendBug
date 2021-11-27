import {v4 as uuid} from 'uuid';

// Blog APP

//blog add (creater)
export const blogAdd = ({title="",description="",dateAdded=0})=>({
  type:"ADD_BLOG",
  blog:{
    id: uuid(),
    title:title,
    description: description,
    dateAdded: dateAdded
  }
});
//blog remove

export const blogRemove = ({id})=>(
  {
    type: "REMOVE_BLOG",
    id:id
  }
)


//blog edit
export const blogEdit = (id,updates)=>(
  {
    type: "EDIT_BLOG",
    id,
    updates
  }
)
