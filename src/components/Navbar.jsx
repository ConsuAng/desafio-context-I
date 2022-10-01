import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="no-underline text-white bg-[#43a047] py-5 px-5 text-center">
      <Link to="/"> Home </Link> | <Link to="/favorites"> Favoritos </Link>
    </nav>
	)
}