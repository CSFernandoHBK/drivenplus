import { Icon } from '@iconify/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { urlAPI } from '../../constants/URLs';

export default function Confirmacao(props) {
    const {setMostraModal, objetoInfoCadastro, nomePlano, precoPlano, config} = props;
    const navigate = useNavigate();
    
    function assinarPlano(){
        const requisicao = axios.post(`${urlAPI}subscriptions`, objetoInfoCadastro, config)
        requisicao.then((r) => {console.log(r); navigate("/home")})
        requisicao.catch((err) => console.log(err)) 
    }

    return(
        <Container>
            <Icon icon="fa-solid:window-close"/>
            <div>
                <p>Tem certeza que deseja assinar o plano {nomePlano} (R$ {precoPlano})?</p>
                <div>
                    <BotaoNao onClick={() => setMostraModal(false)}>NAO</BotaoNao>
                    <BotaoSim onClick={() => assinarPlano()}>SIM</BotaoSim>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: #0E0E13E1 ;    
    z-index: 2; 
    display: flex;
    justify-content: center;
    align-items: center;

    & > div:nth-child(2){
        width: 248px;
        height: 210px;
        background: #FFFFFF;
        border-radius: 12px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between
    }

    p{
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #000000;
        margin-top: 33px;
    }

    svg{
        font-size: 28px;
    }
`

const Botao = styled.button`
    width: 95px;
    height: 52px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-bottom: 12px;
`

const BotaoSim = styled(Botao)`
    background: #FF4791;
`

const BotaoNao = styled(Botao)`
    background: #CECECE;
    margin-right: 14px;
`
