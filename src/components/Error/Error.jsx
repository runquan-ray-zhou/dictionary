import "./Error.css"

export default function About({ errorWord }) {

    return (
        <div className="error">
            <h1>404</h1>
            <p>You found the error page</p>
            <p>This Dictionary does not contain "{errorWord}".</p>
        </div>
    )
}