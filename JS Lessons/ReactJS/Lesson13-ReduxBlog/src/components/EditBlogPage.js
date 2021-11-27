import React from 'react'
import { connect } from 'react-redux'
import { editBlog } from '../actions/blogs'
import BlogForm from './BlogForm'

const EditBlogPage = (props) => {
    return (
        <div>
            <h1>Blog edit Page</h1>
            <BlogForm 
            blog={props.blog}
            onSubmit={(blog)=>{
                props.dispatch(editBlog(props.blog.id, blog));
                props.history.push('/blogs');
            }}
            />
        </div>
    )
}
const mapStateProps = (state, props)=>{
    return{
        blog:state.blogs.find((b)=>{
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateProps)(EditBlogPage);
