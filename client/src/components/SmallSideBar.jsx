import '../App.css'
import './Smallcss.css'
import { Link , useNavigate }  from 'react-router-dom'

export default function SmallSideBar({auth,auth_name,search,setSearch,SignOut,home}){

	const hidemenu = () =>{
		document.getElementById("smalll").style.display="none"
	}

	return(
		<>

		    <div className="nav-bar small">
		    <i onClick={()=>{hidemenu()}} className="fa fa-times text-danger f-30 right pointer"></i>
		        <div className="left-side small">
		    	<h2 className="Logo small"><Link to='/' className='link2'>Menu</Link></h2>
		    	</div>
		    	<p></p>
		    	<div className="right-side small">
		    		<Link to='/' className='link'><i className="fa fa-home"></i> Home</Link>
		    		<Link to='/series' className="link"><i className="fa fa-film"></i> Series</Link>
		    		<Link to='/movies' className="link"><i className="fa fa-video"></i> Movies</Link>
		    		<Link to='/shorts' className="link"><i className="fas fa-stopwatch"></i> Shorts</Link>
		    		<Link to='/mylist' className="link"><i className="fa fa-heart"></i> My List </Link>
		    		<Link to='/about' className="link"><i className="fa fa-question-circle"></i> About </Link>
		    		{
		    			home?
		    		<Link onClick={()=>{setSearch(true);document.getElementById("smalll").style.display="none"}}  className="link" title="Search Box"> <i className="fa fa-search"></i> Search</Link>
		    			:
		    		<Link onClick={()=>{alert("Login First !")}}  className="link" title="Search Box"> <i className="fa fa-search"></i> Search</Link>

		    		}
		    		<div className="bg-none d-flex mt-5 justify-content-between ">
		    			{
		    				auth?
		    			<button onClick={SignOut} className="center btn btn-danger btn-sm "><i className="fas fa-sign-out"></i> Sign out</button>
		    					:
		    			<>
		    			<Link to='/login' className="btn btn-primary btn-sm"><i className="fas fa-sign-in"></i> Sign in</Link>
		    			<Link to='/register' className="btn btn-success btn-sm"><i className="fas fa-user-plus"></i> Sign up</Link>
		    			</>
		    			}
		    		</div>
		    	</div>
		</div>
		</>
		)
}