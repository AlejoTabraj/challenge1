import axios from 'axios'

const getAllPosts = async () => {
    return axios   
                .get('https://jsonplaceholder.typicode.com/posts')
                .then( response => response.data)
                .catch( _ => undefined)
}


export default getAllPosts;