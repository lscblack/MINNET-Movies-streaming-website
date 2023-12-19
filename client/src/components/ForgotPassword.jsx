import '../App.css'
import './Smallcss.css'
import { react, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function ForgotPassword(){
		const [values, usevalues] = useState({email:'',code:''})
	    const handleInput = (event) =>{
	    	usevalues({...values,[event.target.id]:event.target.value})
	    }
	        const goto = useNavigate()
	return(
		<>
		<form className="Form_data" Style="margin-bottom:4px" >
		    <h2 align="center" className="log_form text-white">Reset</h2>
		    <center id="reponse"className="bg-none" ><span className="text-success bg-none">Reset Moviex Account</span></center>
		        <div className="form-group">
		            <label className="des_white">Emails:</label>
		    	    <input id="email" value={values.email}  className="form-control bg-none input-min" type="email" placeholder="Enter Your Email"/>
		    	    <small  className="bg-none  error_form" Style="display:none"></small>
		    	</div>
		        <div className="form-group hide">
		            <label className="des_white">Code:</label>
		    		<input id="code" value={values.code}  className="form-control bg-none input-min" type="password" placeholder="Enter Your Password"/>
		    		<small  className="bg-none  error_form" Style="display:none"></small>
		    	</div>
			<div className="separate"></div>
		    <div className="form-group">
				<button className="btn btn-primary btn-sm">Get Code <i className="fa fa-sign-in"></i></button>
				<Link to='/login' className="link">Remember Password ?</Link>
			</div>
		</form>	
		<div className='Form_data' Style="margin:9px auto">
			<div className='outer-links-but'>
			    <Link to='/register' className="btn btn-danger btn-sm"><i className="fab fa-google" Style="color: white;"></i> Google Account ?</Link>
			    <Link to='/register' className="btn btn-success btn-sm"><i className="fab fa-github" Style="color: white;"></i> Github Account ?</Link>
			</div>
			<p></p>
			<Link to='/register' className="btn btn-sm btn-primary" Style="display:block"><i className="fa fa-user-plus" Style="color:white"></i> Create Account ?</Link>
			<div className="separate"></div>
				<center className="bg-none"><Link to='/' className="link text-danger"><i className="fa fa-home"></i> Home ?</Link></center>
		</div>

		</>
		)
}