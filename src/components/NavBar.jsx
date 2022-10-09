import "./NavBar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";

export const NavBar = () => {
	const { color } = useTheme();

	return (
		<div className="navbar" style={{ backgroundColor: color }}>
			<nav>
				<Link to="/" className="brand">
					<h1>Home</h1>
				</Link>
				<Searchbar />
				<Link to="/create">
					<h1>Create Recipe</h1>
				</Link>
			</nav>
		</div>
	);
};
