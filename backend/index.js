import express from 'express';
import mongoose  from 'mongoose';
import { PORT,connections_String } from './config.js';
import router from './routes/Todo.js';
import cors from 'cors';

// making express app
const app = express();
//using cors(cross origin resource sharing) to let frontend use this server
app.use(cors());
//making middleware to receive data in the form of json
app.use(express.json());
//creating routes to create/read/update/delete TODOs
app.use("/",router);
// connecting to mongodb server with a connection string and staring our server
mongoose.connect(connections_String).then(()=>{
    console.log("connected to mongodb server");
    app.listen(PORT,()=>{console.log(`server started at PORT - ${PORT}`)})
})

