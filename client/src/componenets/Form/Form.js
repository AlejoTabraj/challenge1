import React, { useState } from 'react'
import createPost from '../../Services/createPost'

export const Form = () => {
    const [post, setPost] = useState({
                                title : '',
                                content : '',
                                creado : false    
    })

    const onSubmited = (e) => {
        e.preventDefault()
        const submited = createPost(post.title, post.content)
                            .then( response => {
                                console.log(response)
                                setPost({...post, creado: !post.creado})
                            })
                            .catch( err => {
                                console.log(err)
                            })
    }

    return (
        <>
        <form onSubmit={onSubmited}>

            { console.log(post)}            
            <label htmlFor='title'>Title </label>
                 <input onChange={e => setPost({ ...post, title: e.target.value })} type='text' name='title' id='title' required></input>
           
           
            <label>content</label>
                <textarea onChange={e => setPost({ ...post, content: e.target.value })} type='text' name='content' id='content'></textarea>
        
            <button type='submit'>Crear</button>
        </form>
        {
                post.creado ? (<h3>Tú post a sido creado con exito</h3>) : (<h3>Lo sentimos no hemos pdido crear el post</h3>)    
        }
        
        </>
    )
}
