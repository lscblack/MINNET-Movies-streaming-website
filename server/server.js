const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const app = express()
app.use(cors({origin:['http://localhost:5173'],methods:['POST','GET'],credentials:true}))
app.use(cookieParser())
app.use(express.json())
const salt = 10
const db = mysql.createConnection({host:'localhost',user:'root',password:'',database:'moviex'})

//API TO HANDLE ACCOUNT CREATION
app.post('/register', (req,res) => {
	check = "SELECT * FROM users WHERE user_name=? OR user_email = ?"
	db.query(check,[req.body.uname,req.body.email], (error,data) => {
		if (error) {
			 res.json({error:'Cant Validate Your Data Try Again'})
		}else{
			if(data.length > 0){
				if(data[0].user_name == req.body.uname){
					 res.json({error:'Username Already Exists'})
				}else if(data[0].user_email == req.body.email){
					 res.json({error:'Email Already Exists'})
				}
			}else{
						sql = "INSERT INTO `users`(`user_email`, `user_name`, `password`) VALUES (?,?,?)"
						bcrypt.hash(req.body.pass.toString(), salt, (error, hash) => {
							if (error) {
								 res.json({error:'Failed To Hash Your Password'})
							}
						   const values = [req.body.email,req.body.uname,hash]
							

						db.query(sql, values, (error,result) => {
							if (error) {
								res.json({'error':'Error While Inserting'})
							}else{
					           res.json({'status':'Successfully'})
							}
						})
						})
			}
		}
	})
})
//API TO HANDLE ACCOUNT LOGIN
app.post('/login', (req,res) => {
	sql = "SELECT * FROM `users` WHERE user_name=?"
	db.query(sql, req.body.uname,(error,data) => {
		if (error) {
			res.json({error:"Failed To Send Your Data"})
		}else{
			if(data.length > 0 ){
				bcrypt.compare(req.body.pass.toString(),data[0].password,(err,done)=>{
					if (err) {
						res.json({error:'Failed Test Password. '})
					}else{
						if (done) {
							var uname = data[0].user_name
							const oneMonth = 30 * 24 * 60 * 60 * 1000; // Calculating milliseconds for one month

							var token = jwt.sign({ uname }, "jwt-token-unset-hidden");
							res.cookie('moviexToken', token, {
							  expires: new Date(Date.now() + oneMonth), // Set the expiration to one month from now
							  httpOnly: true,
							  secure: true
							});
							res.json({status:'Successfully'})
						}else{
							res.json({error:'Password Dont Match. '})
						}

					}
				})
			}else{
				res.json({error:'Your Username Not Found. '})
			}

		}
	})
})
// fucntion to check if cookie exists
const checkToken = (req,res,next) => {
const token = req.cookies.moviexToken
if(!token){
	return res.json({error:'Sign First'})
}else{
	jwt.verify(token, "jwt-token-unset-hidden", (err, decoded) =>{
		if (err) {
			res.json({error:'Failed To Get Your Username'})
		}else{
			req.uname = decoded.uname
			next()
		}
	})
}
}
//Check for Token Valididty
app.get('/',checkToken,(req,res) =>{
	res.json({status:"Successfully",name:req.uname})
})
app.get('/logout',(req,res) =>{
	res.clearCookie('moviexToken')
	res.json({status:'Logged out'})
})
app.listen(2002,()=>{
	console.log("Connecting .....")
})