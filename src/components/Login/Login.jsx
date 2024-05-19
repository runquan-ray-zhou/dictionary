import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div>
            <p>This is the Login page, the first page you are seeing.</p>
            <Link to="/home">
            <button>Click Here to go to Home page</button>
            </Link>
        </div>
    )
}