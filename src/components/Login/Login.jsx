import { Link } from "react-router-dom";
import "./Login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="circle">
                <div className="circle1">
                    <div className="circle2">
                        <div className="circle3">
                        </div>
                    </div>
                </div>
            </div>
            <span>Pocket Dictionary Web App</span>
            <div className="login-button__container">
                <div className="edition">
                <p>2024 EDITION</p>
                </div>
                <Link to="/home">
                    <button className="login-button">LOGIN</button>
                </Link>
            </div>
        </div>
    )
}