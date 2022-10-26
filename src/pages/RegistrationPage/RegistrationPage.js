import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import {urlAPI} from "../../constants/URLs"

export default function RegistrationPage() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    console.log(urlAPI);

    function sendRegister(event) {
        event.preventDefault();
        const requisicao = axios.post(`${urlAPI}auth/sign-up`, {
            email: email,
            name: nome,
            cpf: cpf,
            password: senha
        })
        requisicao.then((a) => console.log(a));
        requisicao.catch((e) => console.log(e));
    }

    return (
        <Container>
            <Form onSubmit={sendRegister}>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
                <input type="number" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" required />
                <button type="submit">CADASTRAR</button>
            </Form>
            <Link to={"/"}>
                <p>Já possuí uma conta? Entre</p>
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