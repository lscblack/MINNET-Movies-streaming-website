import '../App.css'
import './Smallcss.css'
import { useState,useEffect } from 'react';
import SmallSideBar from './SmallSideBar'
import axios from 'axios'; // Add this line to import axios
import { Link , useNavigate }  from 'react-router-dom'
import Footer from './Footer'
export default function MinNet(){
		const showmenu = () =>{
		document.getElementById("smalll").style.display="block"
	}

	$(document).ready(function(){
		//handle Prev click 
		$('.owl-carousel').owlCarousel({
		  loop: true,
		  margin: 10,
		  slideBy: 1,
		  nav: true,
		  autoplay: true, // Add this line for auto slide
		  autoplayTimeout: 5000 ,
		  responsive:{
		        0:{
		          items:1
		        }
		    }
		});
	});
	return(
	<>
		<div className="app_body bg-black">
				<div id="smalll">
					<SmallSideBar SignOut="" search="" home="" setSearch="" auth="" auth_name=""/>
				</div>
			    <div className="top-nav">
			        <div className="left">	    
			        <a ><i className="fas fa-question-circle"></i> Have Question</a>
			        <a><i className="fas fa-phone"></i> +232 223 234</a>
			        <a><i className="fas fa-envelope"></i> user@mvx.com</a>
			        </div>
			        <div className="right">
			        	<div className="actions">
			        	<Link to='/login' className="btn btn-primary btn-sm"><i className="fas fa-sign-in"></i> Sign in</Link>
			        	<Link to='/register' className="btn btn-success btn-sm"><i className="fas fa-user-plus"></i> Sign up</Link>
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
			    		<i onClick={()=>{showmenu()}} className="fa fa-list f-30 pointer btn-media"></i>
			    	</div>
			</div>

			<div className="carousel-container mymain bg-black">
				  <div className="owl-carousel myslider" >
				  	<div className="myslide_item" > 
				  		<item className="bg-none">
				  		  	<img src="https://wallpapers.com/images/hd/stalingrad-movie-digital-cover-zkg4mir70ziqyau6.jpg" alt="Disney Movie 1"/>
				  		  	<div className="mydetails">
				  		  		<h3 align="center" className="bg-none">Streaming Excellence for Cinema Aficionados Worldwide</h3>
				  		  		<p align="center" className="bg-none f-12">Streaming Excellence for Cinema Aficionados Worldwide. Dive into a vast 
				  		  		collection of blockbusters, classics, and exclusives. Enjoy high-definition, uninterrupted viewing anywhere, anytime. Personalized, 
				  		  		easy, and immersive. Discover cinematic brilliance at MINENT, where every click reveals cinematic wonders in a seamless streaming 
				  		  		paradise. 
				  		  		<br></br><p></p> 
				  		  		<Link to='login' className="btn btn-primary btn-sm"> Join Us Now <i className="fa fa-user-plus"></i> <i className="fa fa-arrow-right"></i></Link>
				  		  		</p>
				  		  	</div>
				  		</item>
				  	</div>
				  	<div className="myslide_item" > 
				  		<item className="bg-none">
				  		  	<img src="https://espnpressroom.com/us/files/2023/10/231028_Ngannou_US_DOM_PPV_16x9.png" alt="Disney Movie 1"/>
				  		  	<div className="mydetails">
				  		  		<h3 align="center" className="bg-none">Streaming Excellence for Cinema Aficionados Worldwide</h3>
				  		  		<p align="center" className="bg-none f-12">Streaming Excellence for Cinema Aficionados Worldwide. Dive into a vast 
				  		  		collection of blockbusters, classics, and exclusives. Enjoy high-definition, uninterrupted viewing anywhere, anytime. Personalized, 
				  		  		easy, and immersive. Discover cinematic brilliance at MINENT, where every click reveals cinematic wonders in a seamless streaming 
				  		  		paradise. 
				  		  		<br></br><p></p> 
				  		  		<Link to='login' className="btn btn-primary btn-sm"> Join Us Now <i className="fa fa-user-plus"></i> <i className="fa fa-arrow-right"></i></Link>
				  		  		</p>
				  		  	</div>
				  		</item>
				  	</div>
				  	<div className="myslide_item" > 
				  		<item className="bg-none">
				  		  	<img src="https://wallpaper.dog/large/20502022.jpg" alt="Disney Movie 1"/>
				  		  	<div className="mydetails">
				  		  		<h3 align="center" className="bg-none">Streaming Excellence for Cinema Aficionados Worldwide</h3>
				  		  		<p align="center" className="bg-none f-12">Streaming Excellence for Cinema Aficionados Worldwide. Dive into a vast 
				  		  		collection of blockbusters, classics, and exclusives. Enjoy high-definition, uninterrupted viewing anywhere, anytime. Personalized, 
				  		  		easy, and immersive. Discover cinematic brilliance at MINENT, where every click reveals cinematic wonders in a seamless streaming 
				  		  		paradise. 
				  		  		<br></br><p></p> 
				  		  		<Link to='login' className="btn btn-danger btn-sm"> Join Us Now <i className="fa fa-user-plus"></i> <i className="fa fa-arrow-right"></i></Link>
				  		  		</p>
				  		  	</div>
				  		</item>
				  	</div>
				  	<div className="myslide_item" > 
				  		<item className="bg-none">
				  		  	<img src="https://images5.alphacoders.com/525/525783.jpg" alt="Disney Movie 1"/>
				  		  	<div className="mydetails">
				  		  		<h3 align="center" className="bg-none">Streaming Excellence for Cinema Aficionados Worldwide</h3>
				  		  		<p align="center" className="bg-none f-12">Streaming Excellence for Cinema Aficionados Worldwide. Dive into a vast 
				  		  		collection of blockbusters, classics, and exclusives. Enjoy high-definition, uninterrupted viewing anywhere, anytime. Personalized, 
				  		  		easy, and immersive. Discover cinematic brilliance at MINENT, where every click reveals cinematic wonders in a seamless streaming 
				  		  		paradise. 
				  		  		<br></br><p></p> 
				  		  		<Link to='login' className="btn btn-warning btn-sm"> Start Streaming Now <i className="fa fa-video"></i></Link>
				  		  		</p>
				  		  	</div>
				  		</item>
				  	</div>
				  	<div className="myslide_item" > 
				  		<item className="bg-none">
				  		  	<img src="https://images2.alphacoders.com/724/724132.jpg" alt="Disney Movie 1"/>
				  		  	<div className="mydetails">
				  		  		<h3 align="center" className="bg-none">One Online Seamless Movie Streaming Website</h3>
				  		  		<p align="center" className="bg-none f-12">Your go-to for seamless online movie streaming. Dive into a vast collection 
				  		  		of blockbusters, classics, and exclusives. Enjoy high-definition, uninterrupted viewing anywhere, 
				  		  		anytime. Personalized, easy, and immersive. Discover cinematic brilliance at MINENT.  
				  		  		<br></br><p></p> 
				  		  		<Link to='login' className="btn btn-warning btn-sm"> Start Streaming Now <i className="fa fa-video"></i></Link>
				  		  		</p>
				  		  	</div>
				  		</item>
				  	</div>
				  	<div className="myslide_item" > 
				  		<item className="bg-none">
				  		  	<img src="https://wallpapercave.com/wp/wp4074461.jpg" alt="Disney Movie 1"/>
				  		  	<div className="mydetails">
				  		  		<h3 align="center" className="bg-none">MINENT: Discover, Stream, Delight - Your Seamless Movie Wonderland. </h3>
				  		  		<p align="center" className="bg-none f-12">"
				  		  		Seamlessly explore a world of cinematic wonders at MINENT. Enjoy high-definition, uninterrupted streaming across 
				  		  		genres. Dive into personalized movie delights anytime, anywhere. MINENT redefines entertainment with seamless streaming perfection." 
				  		  		<br></br><p></p> 
				  		  		<Link to='register' className="btn btn-success btn-sm"> Create Account <i className="fa fa-user-circle"></i></Link>
				  		  		</p>
				  		  	</div>
				  		</item>
				  	</div>
				  </div>
				</div>
			</div>
			<div className="bg-black" >
				<h4 className="bg-black text-white p-3">Top Release</h4>
				<div className="grid_movies  bg-black">
					<div className="main bg-black">
						<img src="https://espnpressroom.com/us/files/2023/10/231028_Ngannou_US_DOM_PPV_16x9.png"/>
					</div>
					<div className="small bg-black">
						<div className="item_small bg-black">
							<img src="https://images2.alphacoders.com/724/724132.jpg"/>
						</div>
						<div className="item_small bg-black">
							<img src="https://wallpaper.dog/large/20502022.jpg"/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
	</>
	)
}