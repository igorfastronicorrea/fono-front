import React, { Component } from "react";
import "./styles.css";
import { MdInput } from "react-icons/md"
import { Link } from "react-router-dom";

class Login extends Component {


    render() {
        return (
            <div className="logon-container">
                <section className="form">

                    <form>
                        <h1>Faça Login</h1>
                        <input placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button className="button" type="submit">Entrar</button>
                        <Link to="/main">
                            <MdInput size="20px" />
                            Não tenho cadastro</Link>
                    </form>
                </section>
            </div >
        );
    }
}

export default Login;