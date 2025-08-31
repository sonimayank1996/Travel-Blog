const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoute');

app.use(express.json()); // middleware is the that can be modify the incoming request data, middle of request and response
// data of body is added to it by use this middleware

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/blogs', blogRoutes);

module.exports = app;
