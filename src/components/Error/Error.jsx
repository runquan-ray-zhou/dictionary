import "./Error.css"

export default function About({ errorWord }) {

    return (
        <div className="error">
            <p>404</p>
            <p>You found the error page</p>
            <p>This Dictionary does not contain "{errorWord}".</p>
        </div>
    )
}