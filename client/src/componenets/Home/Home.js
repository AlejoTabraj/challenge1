import React from 'react'
import { Link } from 'react-router-dom'
import { TitleContainer, ListWrapper } from './styledHome'

export const Home = ({posts, onClick}) => {


   console.log(onClick)
    return (    
        <TitleContainer>
            {
                posts.data.map(post => (
                <>
                <ListWrapper>
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                    </li>
                </ListWrapper>
                <button onClick={()=> onClick(post.id)}>Delete</button>
                <button>Update</button>
                </>
                ) )
            }
        </TitleContainer>
    )
}
