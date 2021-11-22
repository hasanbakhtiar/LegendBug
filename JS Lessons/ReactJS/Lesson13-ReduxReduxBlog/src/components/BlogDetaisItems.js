import React from 'react'


const BlogDetaisItems = ({id,title,description, dateAdded}) => {
    return (
        <div>
            <p>blog id: {id}</p>
            <p>blog title: {title}</p>
            <p>blog description: {description}</p>
            <p>Date: {dateAdded}</p>
        </div>
    )
}

export default BlogDetaisItems
