const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://cvTest:EglWuKNKBQ6viDkb@cluster0.vkdfy.mongodb.net/testDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure 'views' directory is correct
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index')); // Ensure 'index.js' is in 'routes'

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
