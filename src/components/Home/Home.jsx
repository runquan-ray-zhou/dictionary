import { Link } from "react-router-dom";
import "./Home.css"
import bank from '../../assets/wordbank.png'
import search from '../../assets/search.png'

export default function Home() {
    return(
        <div className="home">
            <h1>Search For A Word</h1>
            <Link to="/search">
            <button>
                <img src={search} alt="search icon" />
            </button>
            </Link>
            <h1>Word-Bank</h1>
            <Link to="/wordbank">
            <button>
                <img src={bank} alt="word bank icon" />
            </button>
            </Link>
        </div>
    )
}