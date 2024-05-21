import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav>
                <Link to="/home">
                    <button>Home</button>
                </Link>
                <Link to="/search">
                    <button>Search</button>
                </Link>
                <Link to="/wordbank">
                    <button>Word-Bank</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
        </nav>
    )
}