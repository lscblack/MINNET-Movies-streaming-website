
import Body from './Body'
import MinNet from './MinNet'
import { useState,useEffect } from 'react';
import axios from 'axios'; // Add this line to import axios
import { Link , useNavigate }  from 'react-router-dom'

export default function Home(){
	//set token transfer
	axios.defaults.withCredentials = true 

	//create variables
	const [auth, setAuth] = useState(false)
	const [uname, setUname] = useState('')
	const [search, setSearch] = useState(false)
	// Handle Errors
	const handleError = (error) => {
	  if(error.data.status == "Successfully"){
	  	setAuth(true)
	  	setUname(error.data.name)
	  }
	}
	//handle token Checkings fo login
	useEffect(() => {
		axios.get('http://localhost:2002/')
		.then(res => handleError(res))
		.catch(error => console.log(error))
	}, [])

	return(
	<>
	    	{
		       auth?
		       <Body search={search} setSearch={setSearch} auth={auth} auth_name={uname}/>
		        :
		       <MinNet/>
			}
	</>)
}