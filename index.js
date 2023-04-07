const express = require('express')
const app = express()

const post = require('./src/posts/post.models')

qpp.get('/', function(req, res)){
    return res.json(req)
}

app.get('/api/v1/posts' , function(req,res) {
    return res.json(post)

})
app.listen(3000, function(){
    console.log('OnlineRestaurant listening on port 3000')
})