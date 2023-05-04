const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const chefs = require('./data/chefs.json')
const blog = require('./data/blog.json')


app.get('/',(req,res)=>{
	res.send("Afghan Cuisine Corner server is running")
})
app.get('/chefs',(req,res)=>{
	res.send(chefs)
})
app.get('/blog',(req,res)=>{
	res.send(blog)
})



app.listen(port,()=>{
	console.log('Afghan Cuisine API is running on port:${port}')
})
