import React from 'react'

const BlogDetailsPage = ({match}) => {
    return (
        <div >
            <p className="text-center">Blog Detail: {match.params.id}</p>
        </div>
    )
}

export default BlogDetailsPage
