import React from 'react'
import { useParams } from 'react-router-dom'

export const Detalle = ({ posts }) => {
    const { id }  = useParams()

    const post = posts.data.filter( post => post.id === +id )
   
    return (
        <div>
            <h2>{post[0].title}</h2>
            <p>{post[0].body}</p>
        </div>
    )
}
