import express from 'express';
import  { createOnePost, getAllPosts, deleteOnePost, getOnePost, updateOnePost } from '../controllers/index.js';
const route = express.Router();


route.get('/posts', (req, res) => {
	getAllPosts()
		.then((response) => res.status(200).json(response))
		.catch((err) => res.status(404).json(err))
})



route.get('/posts/:id', (req, res) => {
	const { id } = req.params;
	getOnePost(id)
		.then((response) => res.status(201).json(response))
		.catch((err) => res.status(400).json(err))
})


route.post('/posts', (req, res) => {
	const { title, content, category, image } = req.body;
	 createOnePost(title, content, image, category)
        .then((response) => res.status(201).json(response))
        .catch((err) => res.status(400).json(err));
})


route.patch('/posts/:id', (req, res) => {
	const { id } = req.params;
	const { title, content, image,category} = req.body;
	console.log(title)
	updateOnePost(id, title, content, image, category)
		.then((response) => res.status(201).json(response))
		.catch((err) => res.status(400).json(err))
	
})


route.delete('/posts/:id', (req, res) => {
	const { id } = req.params
	deleteOnePost(id)
		.then( (response) => res.status(201).json(response))
		.catch((err) => res.status(400).json(err))
})


export default route;