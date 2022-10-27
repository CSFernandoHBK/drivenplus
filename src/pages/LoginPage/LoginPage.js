import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import {urlAPI} from "../../constants/URLs"
import axios from "axios";
import { AuthContext } from "../../context/auth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const {infoUser ,setInfoUser} = useContext(AuthContext);
    const [infoUser, setInfoUser] = useState({});
    const navigate = useNavigate();


    function dataProcess(data){
        const serial = JSON.stringify(data); 
        localStorage.setItem("infoUser", serial);

        if(data.membership === null){
            navigate("/subscriptions");
        } else {
            navigate("/home")
        }
    }

    function sendLogin(event) {
        event.preventDefault();
        const requisicao = axios.post(`${urlAPI}auth/login`, {
            email: email,
            password: password
        })
        requisicao.then((a) => dataProcess(a.data));
        requisicao.catch((e) => console.log(e));
    }

    return (
        <Container>
            <img src={logo} alt="logo driven+" />
            <Form onSubmit={sendLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required />
                <button type="submit">ENTRAR</button>
            </Form>
            <Link to={"/sign-up"}>
                <p>Não possui uma conta? Cadastre-se</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0E0E13;

    img{
        width: 299px;
        height: 49px;
        margin-bottom: 84px;
    }

    p{
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
`

const Form = styled.form`
    display:flex;
    flex-direction: column;

    input{
        background: #FFFFFF;
        border-radius: 8px;
        height: 51px;
        width: 299px;
        margin-top: 16px;
        padding-left: 14px;

        ::placeholder{
            font-size: 14px;
            line-height: 16px;
            color: #7E7E7E;
        }
    }

    button{
        background: #FF4791;
        border-radius: 8px;
        width: 298px;
        height: 52px;
        margin-top: 24px;
        margin-bottom: 24px;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }
`