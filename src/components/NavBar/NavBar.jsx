import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
                <Link to="/home">
                    <button>Home</button>
                </Link>
                <Link to="/searchword">
                    <button>Search</button>
                </Link>
                <Link to="/wordbank">
                    <button>Word Bank</button>
                </Link>
                <Link to="/aboutus">
                    <button>About</button>
                </Link>
        </div>
    )
}