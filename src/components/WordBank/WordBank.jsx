import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function WordBank() {

    const navigate = useNavigate()

    const [wordList, setWordList] = useState([])

    useEffect(() =>{
        fetch("https://664a280fa300e8795d41295c.mockapi.io/api/v1/wordbank")
        .then((res) => res.json())
        .then((res) => {
            setWordList([...res])
        })
        .catch(err => console.error(err))
    },[])

    function handleClick(e) {
        navigate(`/word/${e.target.textContent}`)
    }

    return (
        <div>
            <h1>Word Bank</h1>
            <h2>Current Total Words: {wordList.length}</h2>
            <ul>
                {wordList.length && wordList.map((word, i) => 
                <li key={word + i}>
                    <span onClick={handleClick} style={{cursor: "pointer"}}>{word.singleWord}</span>
                    <button>Delete</button>
                </li>)}
            </ul>
        </div>
    )
}