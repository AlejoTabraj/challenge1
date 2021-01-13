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
    
    useEffect(() => {
      const data = getAllPosts().then( data => {
           setPosts({...posts, data})
       })
    }, [])
    return (
        <Router>
            <div>
    <h1></h1>
            <Navigation/>
            <hr/>
            <Switch>
                <Route path='/posts/:id'>
                    <Detalle posts={posts}/>
                </Route>
                <Route path='/home'>
                    <Home posts={posts}/>
                </Route>
                <Route path='/form'>
                    <Form/>
                </Route>
            </Switch>

            </div>
        </Router>
    )
}
