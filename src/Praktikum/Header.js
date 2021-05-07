import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(){
	const [isShow, setShow] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const { pathname } = useLocation();

	const onClickBurgerButton = function() {
		setShow(!isShow);
	};

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-info mb-4">
			<a className="navbar-brand" href="#!">
				@taufikemal
			</a>

			<div className={`collapse navbar-collapse ${isShow ? "show" : ""}`}
			id="navbarCollapse">
				<ul className="navbar-nav mr-auto">
					<li className={`nav-tem ${pathname === "/" ? "active" : ""}`}>
						<Link className="nav-link" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>

					<li className={`nav-item ${pathname.indexOf("/blog") > -1 ? "active" : ""}`}>
						<Link className="nav-link" to="/blog">
							Blog
						</Link>
					</li>

					<li className={`nav-item ${pathname.indexOf("/form") > -1 ? "active" : ""}`}>
						<Link className="nav-link" to="/form">
							Week10
						</Link>
					</li>

					<li className={`nav-item ${pathname.indexOf("/about") > -1 ? "active" : ""}`}>
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
				</ul>

				<form className="form-inline mt-2 mt-md-0">
					<input 
					className="form-control mr-sm-2" type="text" 
					placeholder="Search" aria-label="Search" />

					<button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	)
}

export default Header;