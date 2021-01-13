import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({posts}) => {
   
    return (    
        <div>
            {
                posts.data.map(post => (
                <ul>
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                    </li>
                </ul>
                ) )
            }
        </div>
    )
}
