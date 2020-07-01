const exec = require('child_process').exec
var express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs') 
var app = express()

/* App config */
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))

/* Routes */
app.get("/text-editor",(req,res)=>{
	res.render("index")
})

function utilWrite(req){
	let data = String(req.body.texteditor)
  
		
	fs.writeFile('./compiler/input.txt', data, (err) => { 
	    if (err) throw err; 
	})
}


app.post("/compile",(req,res)=>{
	var result = {"result":"success"}

	utilWrite(req)

	exec('./my.bat', (err, stdout, stderr) => {  
	    if (err) {  
	      console.error(err)
	    }  
	    console.log(stdout)
	    result.result = String(stdout)
	    res.json(result)
	  })

})




/* Starting the server */
var PORT = process.env.PORT || 8001

app.listen(PORT,()=>{
  console.log("Server started at port: " + PORT)
})