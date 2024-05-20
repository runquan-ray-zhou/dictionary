import { useNavigate } from "react-router-dom"
import icon from '../../assets/magnifying-glass.png';
import './Search.css'

export default function Search() {
    const navigate = useNavigate()

    function findWord(e) {
        e.preventDefault()
        if (!e.target.word.value) {
            alert("Please input a word")
        } else {
            navigate(`/word/${e.target.word.value}`)
        }
    }

    return (
        <div>
            <h1>Search For Word</h1>
            <form onSubmit={findWord}>
                <input type="text" name="word" id="word" placeholder="Search"/>
                <button className="search__icon">
                    <img src={icon} alt="search icon" />
                </button>
            </form>
        </div>
    )
}