const express = require('express'); // Importing express to create the server
const mongoose = require('mongoose'); // Importing mongoose to connect to MongoDB
const cors = require('cors'); // Importing cors to handle cross-origin requests

const app = express(); // Creating an express app
app.use(cors()); // Allowing cross-origin requests
app.use(express.json()); // Parsing JSON bodies



const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
const URI = process.env.URI


// Importing auth routes
const authRoutes = require('./routes/userRoutes');
app.use('/api/auth', authRoutes); // Setting up route for authentication

// connnecting to mongo db
mongoose.connect(URI)
.then(()=>{
    console.log('Database connected');
    // starts listening after datatbse is connected
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })
    
    
})
.catch(()=>{
console.log('database not connected' );
})

