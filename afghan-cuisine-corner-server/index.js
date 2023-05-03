const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
	res.send("Afghan Cuisine Corner server is running")
})

app.listen(port,()=>{
	console.log('Afghan Cuisine API is running on port:${port}')
})