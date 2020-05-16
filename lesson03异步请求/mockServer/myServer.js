let express = require("express")
let app = express()
let bodyParser = require("body-parser")  //post请求需要

app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	res.header("Access-Control-Allow-Headers","*")
	next()
})

//get(url,function)  求和
app.get("/get",(req,res) => {
	let json = JSON.stringify({
		"result":parseInt(req.query.a) + parseInt(req.query.b)
	})
	res.send(json)
})

//解析
app.use(bodyParser.urlencoded({extended:false}))

//post    （减法）
app.post("/post",(req,res) => {
	console.log(req.body)
	let json = JSON.stringify({
		"result":parseInt(req.body.a) - parseInt(req.body.b)
	})
	res.send(json)
})

//监听
app.listen(8888,function(){
	console.log("服务启动了")
})
