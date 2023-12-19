import '../App.css'
import { Link , useNavigate }  from 'react-router-dom'
import './Smallcss.css'
export default function NewMov({search, setSearch, type_img}){
	let movie,title_img,details =''
	if(type_img == "/"){
		movie = "https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2017/09/sti_the_avengers-widejpg-js167717887.jpg"
		title_img = "The Avengers End Game Part III"
		details = "2023, Adventure, by marvel"
	}else if(type_img == "movie"){
		movie = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A58F095E5F07824A9D3C789C0956F5B769A3626B08795A448CC03E1DEC3ED171/scale?width=1200&aspectRatio=1.78&format=jpeg"
		title_img = "Black Pather Wakanda Part III"
		details = "2023, Action By Hollywod"
	}
	let heigh = search? "100%" : "0%";
	return(
	<>
	<div className="main_img">
		<div className="all_search bg-none" style={{ width: heigh }}>
			<div className="Category ">
			<h3 align="center" className="text-white bg-none">Search For Movie</h3>
				<div className="search-box alert text-white bg-primary">
				   <input className="form-control  search" placeholder="Enter Your Search Here" />
				   <button className="btn bg-primary btn-search" onClick={()=>{setSearch(false)}}><i className="fa fa-times"></i></button>
				</div>
			</div>
		</div>
		<div className="right_details">
		<h1 className="title">{title_img}</h1>
		<div className="short_details">{details}</div>
		<div className="btn btn-danger bg-danger btn-sm">12 <i className="fa fa-plus"></i></div>&nbsp;
		<div className="btn btn-success bg-success btn-sm">Add To List <i className="fa fa-list"></i></div>&nbsp;
		<Link className="btn btn-primary bg-primary btn-sm"
		to={{ pathname: '/OneMovie', search: `?data=${encodeURIComponent(movie)}` }}>Watch Now <i className="fa fa-play"></i></Link>
		<div className="long_details">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>

		</div>
		<img src={movie}/>
	</div>

	</>
	)
}