import { useNavigate } from "react-router-dom"

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
                <input type="text" name="word" id="word"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}