import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<div className="navbar">
			<nav>
				<Link to="/" className="brand">
					<h1>Home</h1>
				</Link>
				<Link to="/create">
					<h1>Create Recipe</h1>
				</Link>
			</nav>
		</div>
	);
};
