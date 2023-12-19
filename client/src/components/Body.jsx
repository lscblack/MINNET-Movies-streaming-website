import '../App.css'
import Header from './Header'
import NewMov from './NewMov'
import Grid from './Grid'
import { Link , useNavigate }  from 'react-router-dom'
import Footer from './Footer'
export default function Body({search,setSearch,auth,auth_name,uname}){
	let movie_img = "https://wallpapers.com/images/hd/stalingrad-movie-digital-cover-zkg4mir70ziqyau6.jpg"
	return(
	<>
		<div className="app_body">
				<Header search={search} setSearch={setSearch} auth={auth} auth_name={uname} active="/"/>
			<div Style="position:relative;height:610px;top:-150px">
		   		<NewMov search={search} setSearch={setSearch} type_img="/"/>
			</div>

		   <Grid />
			<div className="bg-black" >
				<h4 className="bg-black text-white p-3">Top Release</h4>
				<div className="grid_movies  bg-black">
					<Link className="main bg-black" to={{ pathname: '/OneMovie', search: `?data=${encodeURIComponent(movie_img)}` }}>
						<img src={movie_img}/>
					</Link>
					<div className="small bg-black">
						<div className="item_small bg-black">
							<img src="https://images2.alphacoders.com/724/724132.jpg"/>
						</div>
						<div className="item_small bg-black">
							<img src="https://images2.alphacoders.com/724/724132.jpg"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</>
	)
}