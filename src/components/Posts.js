import React from 'react'

const Posts = ({ posts, loading}) => {
    if(loading) {
        return <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
    }


  return (
    <ul className='list-group mb-4'>
        {posts.map(post => (
            <li className='list-group-item' key={post.id}>{post.title}</li>
        ))}
    </ul>
  )
}

export default Posts