import { Link } from "react-router-dom"
import "./login.css"
export default function Login() {
    return (
        <div className="conteiner-login">
        <div className="card-login">
            <img  src="src/pages/img/logo.png"/>
            <h1>Login</h1>
            <input className="input-login" type="text" placeholder="Nome" />
            <input className="input-login" type="password" placeholder="Senha" />
            <Link className="logar-link" to='/Home'>
            Entrar 
            </Link>
        </div>
        </div>
    )
}