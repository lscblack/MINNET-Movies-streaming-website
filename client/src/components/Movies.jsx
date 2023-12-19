import '../App.css'
import './Smallcss.css'
import Header from './Header'
import NewMov from './NewMov'
import Footer from './Footer'
import { useState,useEffect } from 'react';
import axios from 'axios'; // Add this line to import axios
import { Link , useNavigate }  from 'react-router-dom'

export default function Movies(){
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
		<Header search={search} setSearch={setSearch} auth={auth} auth_name={uname} active="movies"/>
		<div Style="position:relative;height:560px;top:-150px">
		<NewMov search={search} setSearch={setSearch} type_img="movie"/>
		</div>
		<div className="bg-black">
			<h4  className="text-white p-3 bg-trans bg-none" Style="margin:auto">All Movies </h4>
			<div className="movies">
			
				<div className="movie">
					<div className="image">
						<img src="https://www.boredpanda.com/blog/wp-content/uploads/2022/05/adventure_movies_16-62737e7107748__700.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://netstorage-legit.akamaized.net/images/6a324ec30ceb4da7.jpg?imwidth=900"/>
					</div>
					<div className="title bg-none">
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://www.scrolldroll.com/wp-content/uploads/2022/03/national-Treasure-2-best-adventure-movies.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://play-lh.googleusercontent.com/ic0BimGj4wDmnr_qkOPFsikYMBaW_dkyeR2Ixz1iBSATekMej27SPE4291wwy3345Ae6axHWt6z9lnG2NOcE=w240-h480-rw"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2543/25430621_sa.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://www.scrolldroll.com/wp-content/uploads/2022/03/Dune-best-adventure-movies.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://goodmovieslist.com/best-movies/movie-posters/tt0167261.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>

				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://collider.com/wp-content/uploads/the-avengers-scarlett-johansson-black-widow-poster.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/I/718rLC0MqPL._AC_UF894,1000_QL80_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BYTVhYTRmZWEtODcxZS00OWY5LTg4NzQtMmY2ZjBlYmEyMzMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BMjE4NDc5MDU2NV5BMl5BanBnXkFtZTgwNDI1ODEyNTM@._V1_FMjpg_UX1000_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://www.creativeparamita.com/wp-content/uploads/2023/02/the-last-ship.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://www.dvdsreleasedates.com/posters/800/T/The-Creator-2023-movie-poster.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BYjVhMmM3ZTMtNzIzOS00YTY4LTkxNTAtOTA5Mjk3YzMwMzA2XkEyXkFqcGdeQXVyNDE0OTU3NDY@._V1_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://image.tmdb.org/t/p/w780/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://www.boredpanda.com/blog/wp-content/uploads/2022/05/adventure_movies_17-62737f2ee3e75__700.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://static.wikia.nocookie.net/zathura/images/4/4f/Zathura_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00346816-lmjltvxyvs-portrait.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://qqcdnpictest.mxplay.com/pic/a5f9c706b7247704c7e59f0d0de9eced/en/2x3/312x468/test_pic1601011180547.webp"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_006557CA-B982-484A-AD65-FA9B65AA4BA0_2022-12-7-T14-25-56.jpg?s=260x371"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://resizing.flixster.com/rpvxJRMnsxRQ36jCbv01spWkB8k=/206x305/v2/https://flxt.tmsimg.com/assets/p14482067_p_v8_aa.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://netstorage-legit.akamaized.net/images/b14dc11dc74b385c.jpg?imwidth=900"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://collider.com/wp-content/uploads/the-avengers-scarlett-johansson-black-widow-poster.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/I/718rLC0MqPL._AC_UF894,1000_QL80_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BYTVhYTRmZWEtODcxZS00OWY5LTg4NzQtMmY2ZjBlYmEyMzMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BMjE4NDc5MDU2NV5BMl5BanBnXkFtZTgwNDI1ODEyNTM@._V1_FMjpg_UX1000_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://www.creativeparamita.com/wp-content/uploads/2023/02/the-last-ship.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://www.dvdsreleasedates.com/posters/800/T/The-Creator-2023-movie-poster.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				<div className="movie">
					<div className="image">
						<img src="https://m.media-amazon.com/images/M/MV5BYjVhMmM3ZTMtNzIzOS00YTY4LTkxNTAtOTA5Mjk3YzMwMzA2XkEyXkFqcGdeQXVyNDE0OTU3NDY@._V1_.jpg"/>
					</div>
					<div className="title bg-none">
						
						<h4>Avatar The Last Air Bender</h4>
						<div className="bg-none">@20 Fox Century 023</div>
						<small className="bg-none f-10 ">Action</small>
						<button className="btn btn-primary wd-100 btn-sm center mt-3">More Info <i className="fa fa-list"></i></button>
					</div>
				</div>
				
			</div>
		
		<Footer />
		</div>
	</>)
}