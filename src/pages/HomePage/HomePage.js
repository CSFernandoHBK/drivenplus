import styled from "styled-components";
import { Icon } from '@iconify/react';
import logoPlano1 from "../../assets/images/logoPlano1.png"
import { Link } from "react-router-dom";

export default function HomePage() {
    const infoUser = JSON.parse(localStorage.getItem("infoUser"));
    const {membership, name} = infoUser;

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
                <BotaoCancelarPlano>Cancelar plano</BotaoCancelarPlano>
            </div>
        </Container>
    )

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