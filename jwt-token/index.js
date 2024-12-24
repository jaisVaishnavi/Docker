const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretkey ="secretkey";
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

app.listen(5000,()=>
{
    console.log("Server is running on port 5000");
})