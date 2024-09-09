            const express = require('express');
            const router = express.Router();
            const Blog = require('../models/Blog'); // Make sure Blog model is correctly imported

            // Home route
            router.get('/', (req, res) => {
                Blog.find()
                    .then((blogs) => {
                        res.render('index', { blogs: blogs });
                    })
                    .catch((error) => {
                        console.error('Error fetching blogs:', error);
                        res.status(500).send('Error fetching blogs.');
                    });
            });

            module.exports = router;
