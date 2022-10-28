import styled from "styled-components";
import { Icon } from '@iconify/react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlAPI } from "../../constants/URLs";
import Confirmacao from "./Confirmacao";

export default function SubscriptionsIDPage() {
    const infoUser = JSON.parse(localStorage.getItem("infoUser"));
    const [infoPlano, setInfoPlano] = useState();
    const [nome, setNome] = useState();
    const [digitos,setDigitos] = useState();
    const [codigo, setCodigo] = useState();
    const [validade, setValidade] = useState();
    const [mostraModal, setMostraModal] = useState(false);
    const params = useParams();

    const config = {
        headers: {
            "Authorization": `Bearer ${infoUser.token}`
        }
    };

    useEffect(() => {
        const requisicao = axios.get(`${urlAPI}subscriptions/memberships/${params.id}`, config);
        requisicao.then((r) => setInfoPlano(r.data))
        requisicao.catch((err) => console.log(err))
    }, [])

    function assinarPlano(event){
        event.preventDefault();
        const requisicao = axios.post(`${urlAPI}subscriptions`, {
            membershipId: params.id,
            cardName: nome,
            cardNumber: digitos,
            securityNumber: codigo,
            expirationDate: validade
        }, config)
        requisicao.then((r) => console.log(r))
        requisicao.catch((err) => console.log(err)) 
    }

    if (infoPlano === undefined) {
        return (
            <Container>
                <h1>Carregando</h1>
            </Container>
        )
    }

    return (
        <>
        {mostraModal && <Confirmacao/>}
        <Container>
            <Link to={`/subscriptions`}>
                <BotaoVoltar>
                    <Icon icon="fa-solid:arrow-left" />
                </BotaoVoltar>
            </Link>
            <div>
                <img src={infoPlano.image} alt={`logo do plano ${infoPlano.name}`}/>
                <h1>{infoPlano.name}</h1>
            </div>
            <div>
                <div>
                    <Icon icon="fluent:clipboard-task-list-rtl-20-regular" />
                    <h2>Benefícios:</h2>
                </div>
                {infoPlano.perks.map((i, index) =>
                    <p>{index + 1}. {i.title}</p>)}
            </div>
            <div>
                <div>
                    <Icon icon="fa-solid:money-bill-wave" />
                    <h2>Preco:</h2>
                </div>
                <p>R$ {infoPlano.price} cobrados mensalmente</p>
            </div>
            <Form onSubmit={(event) => {event.preventDefault();setMostraModal(true)}}>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome impresso no cartão" />
                <input type="text" value={digitos} onChange={(e) => setDigitos(e.target.value)} placeholder="Digitos do cartão" />
                <div>
                    <input type="number" value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Código de segurança" />
                    <input type="text" value={validade} onChange={(e) => setValidade(e.target.value)} placeholder="Validade" />
                </div>
                <button>ASSINAR</button>
            </Form>
        </Container>
        </>
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
    position: relative;

    img{
        height: 95px;
        margin-bottom: 12px;
    }
    h1{
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        margin-bottom: 22px;
    }
    h2{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }
    svg{
        color: #FF4791;
        height: 16px;  
    }
    & > div:nth-child(3){
        width: 100vw;
        padding: 0 40px 0;
        margin-bottom: 12px;
        
        & > div:nth-child(1){
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            & > svg{
                font-size: 20px;
            }
        }
    }
    & > div:nth-child(4){
        width: 100vw;
        padding: 0 40px 0;

        & > div:nth-child(1){
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            & > svg{
                font-size: 24px;
                line-height: 1em;
            }
        }
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 34px;
    width: 100vw;
    padding: 0 40px 0;

    input{
        height: 52px;
        background: #FFFFFF;
        border-radius: 8px;
        margin-bottom: 8px;
        /* padding-left: 14px; */

        ::placeholder{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #7E7E7E;
            padding-left: 14px;
        }
    }

    button{
        height: 52px;
        background: #FF4791;
        border-radius: 8px;
        font-weight: 700;
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