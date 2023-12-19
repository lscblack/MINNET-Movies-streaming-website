import '../App.css'
import './Smallcss.css'
import { useState,useEffect } from 'react';
import SmallSideBar from './SmallSideBar'
import axios from 'axios'; // Add this line to import axios
import { Link , useNavigate }  from 'react-router-dom'
export default function Header({auth,auth_name,search,setSearch,active}){
		const goto = useNavigate()

		// Show active page
		if (active === "/") {
		  const linkElements = document.getElementsByClassName('link');
		  if (linkElements.length > 0) {
		    linkElements[0].classList.add('active');
		  }
		}else if(active == "movies"){
				  const linkElements = document.getElementsByClassName('link');
		  if (linkElements.length > 0) {
		    linkElements[2].classList.add('active');
		  }
		}
		//handle Responses
		const handleError = (res) => {
			if(res.data.status == "Logged out"){
				goto('/minnet')
			}else{
				alert(res.data.status)
			}
		}
		//Handle Logout
		const SignOut = () =>{
			axios.get('http://localhost:2002/logout')
			.then(res => handleError(res))
			.catch(error => console.log(error))
		}
		const showmenu = () =>{
			document.getElementById("smalll").style.display="block"
		}
		const search_hot = () =>{
			setSearch(true);
		}
		$(document).ready(function(){
			if(auth=='false'){
				goto("/minnet")
			}
		});

	return(
		<>
			<div id="smalll">
				<SmallSideBar SignOut={SignOut} search={search} setSearch={setSearch} auth={auth} auth_name={auth_name}/>
			</div>
		    <div className="top-nav">
		        <div className="left">	    
		        <a ><i className="fas fa-question-circle"></i> Have Question</a>
		        <a><i className="fas fa-phone"></i> +232 223 234</a>
		        <a><i className="fas fa-envelope"></i> user@mvx.com</a>
		        </div>
		        <div className="right">
		        	<div className="actions">
		        	{
		        		auth?
		        	<button onClick={SignOut} className="btn btn-danger btn-sm "><i className="fas fa-sign-out"></i> Sign out</button>
		        			:
		        	<>
		        	<Link to='/login' className="btn btn-primary btn-sm"><i className="fas fa-sign-in"></i> Sign in</Link>
		        	<Link to='/register' className="btn btn-success btn-sm"><i className="fas fa-user-plus"></i> Sign up</Link>
		        	</>
		        		}
		        	</div>
		        </div>
		    </div>
		    <div className="nav-bar">
		        <div className="left-side">
		    	<h2 className="Logo frame_logo"><Link to='/' className='link2'>MINNET</Link></h2>
		    	</div>
		    	<div className="right-side">
		    		<Link to='/' className='link'><i className="fa fa-home"></i> Home</Link>
		    		<Link to='/series' className="link"><i className="fa fa-film"></i> Series</Link>
		    		<Link to='/movies' className="link"><i className="fa fa-video"></i> Movies</Link>
		    		<Link to='/shorts' className="link"><i className="fas fa-stopwatch"></i> Shorts</Link>
		    		<Link to='/mylist' className="link">My List <i className="fa fa-heart"></i></Link>
		    		<Link to='/about' className="link">About <i className="fa fa-question-circle"></i></Link>
		    		<Link onClick={()=>{search_hot()}}  className="link" title="Search Box"> <i className="fa fa-search"></i></Link>
		    		<i onClick={()=>{showmenu()}} className="fa fa-list f-30 pointer btn-media"></i>
		    	</div>
		</div>
		</>
		)

}