import '../App.css'
import './Smallcss.css'
import { react, useState } from 'react'
import axios from 'axios'

import {Link, useNavigate} from 'react-router-dom'
export default function Register(){
	const [values, usevalues] = useState({uname:'',email:'',pass1:'',pass2:''})
    const handleInput = (event) =>{
    	usevalues({...values,[event.target.id]:event.target.value})
    }
    const goto = useNavigate()
    //password varidation
    function isPasswordSecure(password) {
      // Check if the password meets certain criteria
      // For example, minimum length, uppercase, lowercase, numbers, special characters
      const minLength = 8;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

      return (
        password.length >= minLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialChar
      );
    }
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
      } else if (values.email === "") {
        errorMessage_done(0,'ass')
        focusAndDisplayError('email', 'Email is required');
        errorMessage_done(1,'')
      } else if (values.pass1 === "") {
        errorMessage_done(1,'ass')
        focusAndDisplayError('pass1', 'Password is required');
        errorMessage_done(2,'')
      } else if (!isPasswordSecure(values.pass1)) {
      	errorMessage_done(0,'ass')
      	errorMessage_done(1,'ass')
      	focusAndDisplayError('pass1', 'Use Strong Password Ex:/&Chriss@12!^%$');
      	errorMessage_done(2,'')
      } else if (values.pass2 === "") {
      	errorMessage_done(2,'ass')
        focusAndDisplayError('pass2', 'Please confirm your password');
        errorMessage_done(3,'')
      } else if (values.pass2 != values.pass1) {
      	errorMessage_done(0,'ass')
      	errorMessage_done(1,'ass')
      	errorMessage_done(2,'ass')
      	focusAndDisplayError('pass2', 'Password Dont Match');
      	errorMessage_done(3,'')
      }else{
      	errorMessage_done(0,'ass')
      	errorMessage_done(1,'ass')
      	errorMessage_done(2,'ass')
      	errorMessage_done(3,'ass')
      	axios.post('http://localhost:2002/register',{uname:values.uname,email:values.email,pass:values.pass2})
      	.then(res => handleError(res))
      	.catch(error => console.log(error))
      }
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
        goto('/login')
      }else{
         document.getElementById('reponse').innerHTML=`<span class='text-danger'>${error.data.error}</span>`
      }
    }

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
    const focusAndDisplayError = (fieldName, errorMessage) => {
      const inputField = document.getElementById(fieldName);
      inputField.focus();
      inputField.nextElementSibling.innerHTML = ` <span class="text-danger"><i class="fa fa-question-circle"></i> ${errorMessage}</span>`
    }
    //----------------------form validation
    //form submit
    const handleSubmit = (event) =>{
    	event.preventDefault()
    	handleFormValidation()
    }
	return(
	<>
	<form className="Form_data" Style="margin-bottom:4px" onSubmit={handleSubmit}>
	    <h2 align="center" className="log_form text-white">Sign Up</h2>
	    <center id="reponse"className="bg-none" ><span className="text-success bg-none">Welcome To MINNET</span></center>
	    <div className="form-group">
	        <label for="uname" className="des_white">Username:</label>
		    <input id="uname" value={values.uname} onChange={handleInput} className="form-control bg-none input-min" type="text" placeholder="Enter Your Username"/>
		    <small  className="bg-none  error_form" Style="display:none"></small>
		</div>
	    <div className="form-group">
	        <label for="email" className="des_white">Email:</label>
		    <input id="email" value={values.email} onChange={handleInput} className="form-control bg-none input-min" type="email" placeholder="Enter Your Email"/>
		    <small  className="bg-none  error_form" Style="display:none"></small>
		</div>
	    <div className="form-group">
	        <label for="pass1" className="des_white">Password:</label>
			<input id="pass1" value={values.pass1} onChange={handleInput} className="form-control bg-none input-min" type="password" placeholder="Enter Your Password"/>
			<small  className="bg-none  error_form" Style="display:none"></small>
		</div>
	    <div className="form-group">
	        <label for="pass2" className="des_white">Confirm:</label>
			<input id="pass2" value={values.pass2} onChange={handleInput} className="form-control bg-none input-min" type="password" placeholder="Enter Your Confirm"/>
			<small  className="bg-none  error_form" Style="display:none"></small>
		</div>
		<div className="separate"></div>
	    <div className="form-group">
			<button className="btn btn-success btn-sm">Sign Up <i className="fa fa-user-plus"></i></button>
			<span className="link text-danger">Password Length</span>
		</div>
	</form>	
	<div className='Form_data' Style="margin:9px auto">
		<Link to='/login' className="btn btn-sm btn-primary" Style="display:block"><i className="fa fa-sign-in" Style="color:white"></i> Already Have Account Sign In ?</Link>
		<div className="separate"></div>
			<center className="bg-none"><Link to='/' className="link text-danger"><i className="fa fa-home"></i> Home ?</Link></center>
	</div>
	</>
	)
}