import { Post } from '../database/db.js'

const getAllPosts = _ => {
	 return new Promise((resolve, reject) => {
        Post.findAll({})
            .then((posts) => {
                if (posts.length === 0) {
                    return reject({
                        error: {
                            name: "ApiFindError",
                            type: "Posts Error",
                            errors: [
                                {
                                    message:
                                        "there are no posts in the database",
                                    type: "not found",
                                    value: null,
                                },
                            ],
                        },
                    });
                }

                resolve(posts);
            })
            .catch((err) => reject({ error: err.message }));
    });
}


const getOnePost = ( id ) => {
	return new Promise( (resolve, reject) => {
		Post.findOne({ where: {id}})
			.then((post) => resolve(post))
			.catch((err) => reject({ error: err.message}))
	})
}

const createOnePost = (title, content, image, category) => {
    return new Promise((resolve, reject) => {
        Post.create({ title, content, image, category })
            .then((post) => resolve(post))
            .catch((err) => reject({ error: err.message }));
    });
};


const deleteOnePost = ( id ) => {

	return new Promise( (resolve, reject) => {
		Post.destroy({
			where: {id}
		})
			.then((response) => resolve('El post a sido eliminado'))
			.catch((err) => reject({error: err.message}))
	})
}



const updateOnePost = ( id, title, content, image, category ) => {
	return new Promise( (resolve, reject) => {
		Post.update({title, content, image, category}, {
			where: {id}
		})
			.then((response) => resolve(response))
			.catch((err) => reject({error: err.message}))
	})
}


export {
	getAllPosts,
	getOnePost,
	createOnePost,
	deleteOnePost,
	updateOnePost
}