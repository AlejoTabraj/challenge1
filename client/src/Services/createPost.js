import axios from 'axios'

const createPost = async (title, content) => {
    return axios
                .post('https://jsonplaceholder.typicode.com/posts', { title, content})
                .then( response => response.data)
                .catch( _ => undefined)
}


export default createPost;