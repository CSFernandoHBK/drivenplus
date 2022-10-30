import styled from "styled-components";
import { Icon } from '@iconify/react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../../constants/URLs";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function HomePage() {
    const infoUserCT = useContext(UserContext);
    const navigate = useNavigate();

    function cancelarPlano(){
        const config = {
            headers: {
                "Authorization": `Bearer ${infoUserCT.token}`
            }
        };

        const requisicao = axios.delete(`${urlAPI}subscriptions`, config)
        requisicao.then(() => navigate("/subscriptions"))
        requisicao.catch(() => alert("Ocorreu um erro! Por favor, recarregue a página e tente novamente"));
    }

    if(infoUserCT === undefined){
        return(
            <Container>
                <p>Carregando</p>
            </Container>
        )
    } else {
        const {membership, name} = infoUserCT;
        return (
        <Container>
            <img src={membership.image} />
            <Icon icon="fa-solid:user-circle" />
            <div>
                <p>Olá, {name}</p>
                {membership.perks.map((m, index) =>
                <a href={m.link} key={m.id}>
                    <Botao>{m.title}</Botao>
                </a> 
                )}
            </div>
            <div>
                <Link to={`/subscriptions`}>
                    <BotaoMudarPlano>Mudar plano</BotaoMudarPlano>
                </Link>
                <BotaoCancelarPlano onClick={() => cancelarPlano()}>Cancelar plano</BotaoCancelarPlano>
            </div>
        </Container>
    )
    }
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #0E0E13;
    position: relative;

    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        margin-bottom: 45px;
    }
    img{
        height: 51px;
        position: absolute;
        top: 32px;
        left: 38px;
    }
    svg{
        color: #FFFFFF;
        font-size: 34px;
        position: absolute;
        top: 22px;
        right: 22px;
    }

    & > div:nth-child(3){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 95px;
    }

    & > div:nth-child(4){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 12px;
    }
`

const Botao = styled.button`
    background: #FF4791;
    border-radius: 8px;
    width: 299px;
    height: 52px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top: 8px;
`


const BotaoMudarPlano = styled(Botao)`
    background: #FF4791;
`
const BotaoCancelarPlano = styled(Botao)`
    background: #FF4747;
`