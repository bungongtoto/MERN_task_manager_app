const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const TaskRoute = require("./routes/TaskRoute.js")
// import TaskRoute from "./routes/booksRoute.js"


const app =  express();

const PORT = 5000;

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
// Option 1: Allow all origins with default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000', 
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN Task APP')
});

app.use('/api/tasks', TaskRoute); 

mongoose
    .connect(process.env.MONGO_URI)
    .then((connect)=>{
        console.log(`MongoDB Connected: ${connect.connection.host}`);
        app.listen(PORT, ()=>{
            console.log(`App is listerning to port: ${PORT}`)
        });
    })
    .catch((error)=>{
        console.log(error);
    });