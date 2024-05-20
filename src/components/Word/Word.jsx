import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./Word.css"

const BASE_URL="https://api.dictionaryapi.dev/api/v2/entries/en/"

const BANK_URL="https://664a280fa300e8795d41295c.mockapi.io/api/v1/wordbank"

export default function Word() {

    const navigate = useNavigate()

    const { word } = useParams()

    const [wordInfo, setWordInfo] = useState([])

    const [newWord, setNewWord] = useState({
        singleWord: `${word}`
    })

    const url = BASE_URL + word

    useEffect(() => {
        setNewWord({...newWord, singleWord: `${word}`})
    },[word])

    function checkWordInBank(word){ //This function returns a Promise
        return fetch("https://664a280fa300e8795d41295c.mockapi.io/api/v1/wordbank")
        .then((res) => res.json())
        .then((res) => {
            return res.some(obj => obj.singleWord === word)
        })
        .catch(err => console.error(err))
    } 

    function addWord(note) { //This function add word to wordbank api
        const options = {
            method: "POST",
            body: JSON.stringify(note),
            headers: { "Content-Type": "application/json" },
        };
        return fetch(`${BANK_URL}`, options)
        .then((response) => {
            return response.json();
        })
        .then(()=>{navigate(0)})
        .catch(error=>console.error(error));
    }
    
    function addWordToBank(word){
        checkWordInBank(word)
        .then((haveWord) => {
        if(haveWord) {
            alert("This word is already in Word Bank")         
        } else {
            addWord(newWord)
        }
        })
        .catch(err => console.error(err))
    }

useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        setWordInfo(...res)
    })
    .catch(err => console.error(err))
  }, [word])

function handleClick(e) {
    const { nodeName } = e.target;
    if (nodeName === 'SPAN') {
        navigate(`/word/${e.target.textContent.replace(/[.,\/“”"'#!?$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().trim()}`)
    }
  }
    return (
        <div>
            <h1>{wordInfo.word && <span>{word}</span>}</h1>
            <iframe src={`https://commons.wikimedia.org/wiki/File:En-us-${word.toLowerCase().trim()}.ogg?embedplayer=yes`} width="50" height="40" frameBorder="0" loading="lazy" allow="autoplay; picture-in-picture" allowFullScreen>
            </iframe>
            <ul>
                <span onClick={handleClick} style={{cursor: "pointer"}}>Phonetic: </span>
                {wordInfo.word && wordInfo.phonetics.filter(phonetic => phonetic.text)[0].text}
                {wordInfo.word && 
                    wordInfo.meanings.map((meaning, i) => 
                        <div key={meaning+i}>
                            <span onClick={handleClick} style={{cursor: "pointer"}}>Part of Speech:</span> 
                            <span onClick={handleClick} style={{cursor: "pointer"}}>"{meaning.partOfSpeech}"</span>
                            <br />
                            <span onClick={handleClick} style={{cursor: "pointer"}}>Definition:</span> 
                            <ul>{meaning.definitions.map((each, i) => 
                            <div key={each+i}>* {each.definition.split(" ").map((word, i) => 
                            <span key={word+i} onClick={handleClick} style={{cursor: "pointer"}}>{word} </span>)}
                            </div>)}
                            </ul>

                            {meaning.definitions.some(obj => obj.hasOwnProperty("example")) && 
                            <span onClick={handleClick} style={{cursor: "pointer"}}>Examples:</span>} 
                            <ul>{meaning.definitions.map((each, i) => 
                            <div key={each+i}>{each.example && each.example.split(" ").map((word, i) => 
                            <span key={word+i}onClick={handleClick} style={{cursor: "pointer"}}>{word} </span>)}
                            </div>)}
                            </ul>

                            {meaning.synonyms[0] &&
                            <span onClick={handleClick} style={{cursor: "pointer"}}>Synonyms:</span>} 
                            <ul>{meaning.synonyms.map((synonym, i) => 
                            <div key={synonym+i}>{synonym.split(" ").map((word, i) => 
                            <span key={word+i}onClick={handleClick} style={{cursor: "pointer"}}>{word} </span>)}
                            </div>)}
                            </ul>

                            {meaning.antonyms[0] &&
                            <span onClick={handleClick} style={{cursor: "pointer"}}>Antonyms:</span>} 
                            <ul>{meaning.antonyms.map((antonym, i) => 
                            <div key={antonym+i}>{antonym.split(" ").map((word, i) =>
                            <span key={word+i}onClick={handleClick} style={{cursor: "pointer"}}>{word} </span>)}
                            </div>)}
                            </ul>
                            <br />
                            <hr />
                        </div>
                    )}
            </ul>
            <button onClick={() => addWordToBank(word)}>Add "{word.toLowerCase()}" To Word Bank</button>
        </div>
    )
}