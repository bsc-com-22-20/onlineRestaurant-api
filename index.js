const express = require('express')
const app = express()
const bodyParser = require("body-parser");

const dbConnection = require('./src/utils/mysql.connector');
const post = require("./src/posts/post.models");
 const { response } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.patch('/api/v1/posts/:id', function(request, response){
    //console.log(request.body, request.params)

    const sql = `SELECT * FROM posts WHERE id =${request.params.id} LIMIT 1`

    return dbConnection.query(sql, function(err, rows) {
        if(err) throw err

        return response.json(rows)
    })
})

app.get('/', function(req, res){
    return res.json(req.headers)
}) 

app.get('/api/v1/posts' , function(req,res) {
    let sql = "select * from posts"
    return dbConnection.query(sql, function(err, results){
        if (err) throw err;
    return res.json(results);

    })
    
})

app.post("/api/v1/posts", (req, res) => {
    console.log(req.body);
    const { name, imageurl, summary} = req.body;
    let sql = `INSERT INTO POSTS ( name, imageurl, summary) VALUES ('${name}', '${imageurl}', '${summary}')`;
    dbConnection.query(sql, (err) => {
        if (err) throw err;
        console.log("1 insert recorded");

     })
})
app.listen(3000, function(){
    console.log('OnlineRestaurant listening on port 3000')
     /* let sql = "INSERT INTO posts (name, imageurl, summary) VALUES ( 'angie', 'picture', 'conclusion')"
     dbConnection.query(sql,function(err){
         if (err) throw err 
         console.log ("one insert recorded")
    }) */

     dbConnection.connect(function(err){
         if (err) throw err
 
        console.log("connected to MySQL")
        
    }) 

   })