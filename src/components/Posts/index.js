import React from 'react'
import Post from './Post'
import "../../css/main.css"

const Posts = ({posts, title}) => {
    return (
        <div className="section blog-section">
            <div className="container is-max-desktop">
                <div className='section-item'>
                <h2 className='section-topic2'>Blog Posts</h2>
                </div>
                <article className="list-items">
                    {posts.map(post=>{
                        return <Post key={post.id} {...post}  />
                    })}
                </article>
            </div>
        </div>
    )
}

export default Posts
