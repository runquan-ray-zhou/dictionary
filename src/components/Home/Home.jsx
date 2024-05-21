import { Link } from "react-router-dom";
import "./Home.css"
import bank from '../../assets/wordbank.png'
import search from '../../assets/search.png'

export default function Home() {
    return(
        <div className="home">
            <Link to="/search">
            <button>
                <img src={search} alt="search icon" />
            </button>
            </Link>
            <Link to="/wordbank">
            <button>
                <img src={bank} alt="word bank icon" />
            </button>
            </Link>
        </div>
    )
}