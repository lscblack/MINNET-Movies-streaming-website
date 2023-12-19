import '../App.css'
import './Smallcss.css'
import { Link , useNavigate }  from 'react-router-dom'
const date = new Date()
const year = date.getFullYear()
export default function Footer(){
	return(
		<>
			<div className="footer">
			<div className="bg-footer">
				<div className="box ">
					<h4 className="bg-none"> <span className="text-danger">MIN</span><span className="text-white">@</span><span className="text-primary">NET </span></h4>
					<div className="text-white f-10 bg-none">This The Best Website for live stream seamless <br></br> movies any where you are MIN NET the wolrd movies of all times</div>
					<p></p>
					<b className="text-white bg-none">CONTACT INFO</b>
					<div className="bg-none ">
						<span className="text-white f-12 d-block p-1 hover-round-red"><i className="fa fa-envelope bg-danger circle-rd f-12"></i> minet@gmail.com</span>
						<span className="text-white f-12 d-block p-1 hover-round-red"><i className="fab fa-whatsapp bg-success circle-rd f-12"></i> +250 788 000 000</span>
					</div>
				</div>
				<div className="box">
					<h4 className="bg-none text-white">LINKS <i className="fa fa-location"></i></h4>
					<div className="bg-none text-white footer-link">
						<Link to="/" className="bg-none d-block hover-round-red"><i className="fa fa-video"></i> Watch Movies <i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></Link>
						<Link to="/" className="bg-none d-block hover-round-red"><i className="fa fa-film"></i> Start Series <i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></Link>
						<Link to="/" className="bg-none d-block hover-round-red"><i className="fa fa-gear"></i> View Our Terms & Condition <i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></Link>
						<Link to="/" className="bg-none d-block hover-round-red"><i className="fa fa-question-circle"></i> View About Us <i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></Link>					
						</div>
				</div>
				<div className="box">
					<h4 className="bg-none text-white">OUR SOCIAL MEDIAS <i className="fa fa-globe"></i></h4>
					<div className="bg-none ">
						<span className="text-white f-12 d-block p-1 hover-round-red"><i className="fab fa-instagram bg-danger circle-rd f-12"></i> minet_Wide_Movies</span>
						<span className="text-white f-12 d-block p-1 hover-round-red"><i className="fab fa-facebook bg-primary circle-rd f-12"></i> minet_Wide_Movies</span>
						<span className="text-white f-12 d-block p-1 hover-round-red"><i className="fab fa-youtube bg-danger circle-rd f-12"></i> minet_Wide_Movies</span>
					</div>
				</div>
				<div className="box">
					<h4 className="bg-none text-white">OUR SERVICES <i className="fa fa-database"></i></h4>
					<div className="bg-none text-white footer-link">
						<Link to="/" className="bg-none d-block hover-round-red"><i className="fa fa-coins"></i> Paid Movies Streamming </Link>
						<Link to="/" className="bg-none d-block hover-round-red"><i className="fa fa-video"></i> Video Production </Link>
						<Link to="/" className="bg-none d-block hover-round-red"><i className="fa fa-stopwatch"></i> Website / Movie Hosting </Link>			
						</div>
				</div>
			</div>
			<div className="footer-nav">
				<center className="bg-none">
					<span className="text-white">&copy;Copyright {year} All rights Reserved Coded By</span>
					<span className="text-danger"> lscblack</span>
				</center>
			</div>
			</div>
		</>
		)
}