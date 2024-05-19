import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <div>This is the Home page</div>
            <Link to="/search">
            <button>This is the search for word button</button>
            </Link>
            <Link to="/wordbank">
            <button>This is the open word bank button</button>
            </Link>
        </div>
    )
}