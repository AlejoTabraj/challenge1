import React, { useState, useEffect} from 'react'
import { Navigation } from '../Navbar/Navbar'
import 
{ BrowserRouter as Router,
  Switch,
  Route
  } from  'react-router-dom'
import { Home } from '../Home/Home'
import { Form } from '../Form/Form'
import getAllPosts from '../../Services/getAllPosts'
import { Detalle } from '../Detalle/Detalle'





export const App = () => {
    const [posts, setPosts] = useState([]);


    const deletePostEvent = (id) => {
        const data = posts.data.filter( post => post.id !== +id )
        setPosts({...posts, data  })

    }
    
    useEffect(() => {
    //eslint-disable-next-line
        const data = getAllPosts().then( data => {
           setPosts({...posts, data})
       })
    //eslint-disable-next-line
    }, [])
    return (
        <Router>
            <div>
            <Navigation/>
            <hr/>
            <Switch>
                <Route path='/posts/:id'>
                    <Detalle posts={posts}/>
                </Route>
                <Route path='/home' exact>
                    <Home posts={posts} onClick={(id) => deletePostEvent(id)}/>
                </Route>
                <Route path='/form' exact>
                    <Form/>
                </Route>
            </Switch>

            </div>
        </Router>
    )
}
