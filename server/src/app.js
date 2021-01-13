import express from 'express';
import { createTables } from './database/db.js';
import route from './routes/postRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/', route)



app.listen(PORT	, () => {

	createTables()
	console.log(`Elservidor está corriendo en el puerto ${PORT}`, process.env.USERNAME)
})