import '../App.css'
import './Smallcss.css'
import { react, useState } from 'react'
import axios from 'axios'
import ForgotPassword from './ForgotPassword'
import {Link, useNavigate} from 'react-router-dom'
export default function Login(){
		const [values, usevalues] = useState({uname:'',pass:''})
	    const handleInput = (event) =>{
	    	usevalues({...values,[event.target.id]:event.target.value})
	    }
	    	    //naviagtion
	    const goto = useNavigate()
	    //allow crediants
	    axios.defaults.withCredentials = true
	    //validate USername
	    function isUsernameValid(username) {
	      // Check if username contains spaces or characters other than . and _
	      const regex = /^[a-zA-Z0-9_.]+$/; // Allows letters, numbers, ., and _
	      return !/\s/.test(username) && regex.test(username);
	    }

	    //----------------------form validation
	    const handleFormValidation = () => {
	      if (values.uname === "") {
	        focusAndDisplayError('uname', 'Username is required');
	        errorMessage_done(0,'')
	      } else if (!isUsernameValid(values.uname)) {
	      	focusAndDisplayError('uname', 'No Space of Special characters <b class="bg-none">Use(./)</b>');
	      	errorMessage_done(0,'')
	      } else if (values.pass === "") {
	        errorMessage_done(0,'ass')
	        focusAndDisplayError('pass', 'Password is required');
	        errorMessage_done(1,'')
	      } else {
	      	errorMessage_done(0,'ass')
	      	errorMessage_done(1,'ass')
	      	axios.post('http://localhost:2002/login',values)
	      	.then(res => handleError(res))
	      	.catch(error => console.log(error))
	      }
	    }
	    //success message
	    const errorMessage_done = (id,msg) =>{
	    	const elements = document.getElementsByClassName('error_form');
	    	if(msg == ""){
	    		if (elements[id]) {
	    	  		elements[id].style.display = 'block';
	    		}
	    	}else{
	    	  		elements[id].innerHTML = ` <span class="text-success"><i class="fa fa-question-circle"></i> Well Filled</span>`;	
	    	}
	    }
	    //Error Messages
	    const focusAndDisplayError = (fieldName, errorMessage) => {
	      const inputField = document.getElementById(fieldName);
	      inputField.focus();
	      inputField.nextElementSibling.innerHTML = ` <span class="text-danger"><i class="fa fa-question-circle"></i> ${errorMessage}</span>`
	    }
	    //form submit
	    const handleSubmit = (event) =>{
	    	event.preventDefault()
	    	handleFormValidation()
	    }
	    // Handle Errors
	    const handleError = (error) => {
	      if (error.data.error === 'Username Already Exists') {
	        errorMessage_done(0, '');
	        focusAndDisplayError('uname', error.data.error);
	      } else if (error.data.error === 'Email Already Exists') {
	        errorMessage_done(1, '');
	        focusAndDisplayError('email', error.data.error);
	      } else if (error.data.status === 'Successfully') {
	        goto('/')
	      }else{
	         document.getElementById('reponse').innerHTML=`<span class='text-danger'>${error.data.error}</span>`
	      }
	    }
	return(
	<>
	<form className="Form_data" Style="margin-bottom:4px" onSubmit={handleSubmit}>
	    <h2 align="center" className="log_form text-white">Sign In</h2>
	    <center id="reponse"className="bg-none" ><span className="text-success bg-none">Welcome To <b className="frame_logo green">MINNET</b></span></center>
	        <div className="form-group">
	            <label for="uname" className="des_white">Username:</label>
	    	    <input id="uname" value={values.uname} onChange={handleInput} className="form-control bg-none input-min" type="text" placeholder="Enter Your Username"/>
	    	    <small  className="bg-none  error_form" Style="display:none"></small>
	    	</div>
	        <div className="form-group">
	            <label for="pass" className="des_white">Password:</label>
	    		<input id="pass" value={values.pass} onChange={handleInput} className="form-control bg-none input-min" type="password" placeholder="Enter Your Password"/>
	    		<small  className="bg-none  error_form" Style="display:none"></small>
	    	</div>
		<div className="separate"></div>
	    <div className="form-group">
			<button className="btn btn-primary btn-sm">Sign In <i className="fa fa-sign-in"></i></button>
			<Link to='/reset' className="link">Forgot Password ?</Link>
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