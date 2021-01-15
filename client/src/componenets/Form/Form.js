import React, { useState, useEffect } from 'react'
import createPost from '../../Services/createPost'
import { FormWrapp } from './styledForm'
import { useParams } from 'react-router-dom'

export const Form = ({posts}) => {
    const [post, setPost] = useState({
                                title : '',
                                content : '',
                                creado : false    
    })
    

    const { id } = useParams()


    useEffect(()=>{


    if(id){

    const item = posts.data.filter( item => item.id === +id)
        console.log('iiii', posts)       
        setPost({ title: item[0].title, content: item[0].body, creado: false})
        console.log('title',item[0].title, post)
    }
    // eslint-disable-next-line
    }, [])



    const onSubmited = (e) => {
        e.preventDefault()
        // eslint-disable-next-line
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
        <FormWrapp onSubmit={onSubmited}>
            
            <label htmlFor='title'>Title </label>
                 <input value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type='text' name='title' id='title' required></input>
           
           
            <label>content</label>
                <textarea value={post.content} onChange={e => setPost({ ...post, content: e.target.value })} type='text' name='content' id='content'></textarea>
            {
                id ? (<button type='submit'>Modificar</button>): <button type='submit'>Crear</button>
            }
            
        </FormWrapp>
        {       
             id ? (post.creado ? (<h3>Tú post a sido modificado con exito</h3>) : (null) ):   (post.creado ? (<h3>Tú post a sido creado con exito</h3>) : (null) )
        }
        
        </>
    )
}
