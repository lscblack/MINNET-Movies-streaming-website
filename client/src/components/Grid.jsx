import '../App.css'
import './Smallcss.css'
import react from 'react'
import { Link , useNavigate }  from 'react-router-dom'
import movies from './MovieList'
export default function Grid(){
	$(document).ready(function(){
				//handle Prev click 
				$('.owl-carousel').owlCarousel({
				      loop: true,
				      margin: 10,
				      slideBy: 0.5,
				      nav: false,
				      responsive:{
				        0:{
				          items:2
				        },
				        500:{
				          items:2
				        },
				        600:{
				          items:3
				        },
				        700:{
				          items:4
				        },
				        800:{
				          items:5
				        },
				        900:{
				          items:7
				        },
				        1000:{
				          items:8
				        }
				      }
				    });

				 $('.carousel-container').each(function(index) {
			      var $carousel = $(this).find('.owl-carousel');
			      var $prevBtn = $(this).find('.prev');
			      var $nextBtn = $(this).find('.next');

			      $carousel.owlCarousel();

			      $prevBtn.on('click', function() {
			        $carousel.trigger('prev.owl.carousel');
			      });

			      $nextBtn.on('click', function() {
			        $carousel.trigger('next.owl.carousel');
			      });
			    });
				 // end of owl cursol	
   });

	 //action movies
	 const actions = (cat) => {
	     return movies.filter(mov => mov.cat == cat).map((movie) => (
	         <div className="movie bg-none" key={movie.id}>
	             <div className="image bg-none">
	                 <img src={movie.img} alt={movie.name} />
	             </div>
	             <div className="title bg-none">
	                <h4>{movie.name}</h4>
	                <div className="bg-none">{movie.gene}</div>
	                <small className="bg-none f-10 ">@{movie.cat}</small>
	                <div className="d-flex">
	                	<Link className="btn btn-primary btn-sm  btn-sm center mt-3"to={{ pathname: '/OneMovie', search: `?data=${encodeURIComponent(movie.img)}` }}> &nbsp;Play <i className="fa fa-play"></i></Link>
	                	<button className="btn btn-success  btn-sm center mt-3"onClick={()=>alert(movie.name)}> &nbsp;More <i className="fa fa-list"></i></button>
	             	</div>
	             </div>
	         </div>
	     ));
	 };
	 const movies_sliders = () =>{
	 	// get categories
	 	const categories = [...new Set(movies.map(catg => catg.cat)) ]
	 	return categories.map((category) => (<div className="bg-black mov carousel-container" >
	 		<div className="cat_head bg-none">
	 			<Link Style="text-decoration:none" to='movies' className="text-white mt-0 p-3 bg-none">{category} Movies <i className="red fa fa-angle-right"></i></Link>
	 			<div className="bg-none next-prev">
	 				<button  className="prev btn btn-sm btn-danger "><i className="fa fa-angle-left"></i></button>
	 				<button  className="next btn btn-sm btn-danger"><i className="fa fa-angle-right"></i></button>
	 			</div>
	 		</div>
	 		<div className="movies home owl-carousel">
	 			{actions(category)}
	 		</div>
	 	</div>))
	 }
	return(
		<>

		{movies_sliders()}

	</>)
}