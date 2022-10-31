import styled from "styled-components"
import { Icon } from "@iconify/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { urlAPI } from "../../constants/URLs";

export default function UpdateUserPage() {
    const params = useParams();
    const infoUser = JSON.parse(localStorage.getItem("infoUser"));
    const {name, cpf, email} = infoUser;
    const [novoNome, setNovoNome] = useState(name);
    const [novoEmail, setNovoEmail] = useState(email);
    const [senhaAtual, setSenhaAtual] = useState();
    const [novaSenha, setNovaSenha] = useState();
    const navigate = useNavigate();

    function alterarUsuario(event){
        event.preventDefault()
        const config = {
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            }
        };
        const requisicao = axios.put(`${urlAPI}users`,{
            name: novoNome,
            cpf: cpf,
            email: novoEmail,
            currentPassword: senhaAtual,
            newPassword: novaSenha
        }, config)
        requisicao.then((r) => {updateState(r)})
        requisicao.catch((err) => console.log(err))
    }

    function updateState(r){
        infoUser.name = r.data.name;
        infoUser.email = r.data.email;
        infoUser.password = r.data.password;
        localStorage.setItem("infoUser", JSON.stringify(infoUser));
        navigate(`/users/${params.id}`);
    }

    return(
        <Container>
            <Link to={`/users/${params.id}`}>
                <BotaoVoltar>
                    <Icon icon="fa-solid:arrow-left" />
                </BotaoVoltar>
            </Link>
            <Form onSubmit={alterarUsuario}>
                <input type="text" 
                placeholder={`${name}`}
                value={novoNome} 
                onChange={(e) => setNovoNome(e.target.value)} />
                <input type="number" placeholder={`${cpf}`} disabled/>
                <input type="email" 
                placeholder={`${email}`}
                value={novoEmail} 
                onChange={(e) => setNovoEmail(e.target.value)} />
                <input type="password" 
                placeholder="Senha atual" 
                value={senhaAtual} 
                onChange={(e) => setSenhaAtual(e.target.value)}
                required/>
                <input type="password" 
                placeholder="Nova senha" 
                value={novaSenha} 
                onChange={(e) => setNovaSenha(e.target.value)}
                />
                <button>SALVAR</button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0E0E13;
    padding: 0 40px 0;
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
const BotaoVoltar = styled.div`
    position: absolute;
    top: 25px;
    left: 22px;

    & > svg{
        width: 28px;
        height: 32px;
        color: #FFFFFF;
    }
`