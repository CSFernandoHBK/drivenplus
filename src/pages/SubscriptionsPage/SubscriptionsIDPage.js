import styled from "styled-components";
import logoPlano1 from "../../assets/images/logoPlano1.png"
import { Icon } from '@iconify/react';

export default function SubscriptionsIDPage() {

    function teste(){
        return(alert("apertou"));
    }

    return (
        <Container>
            <BotaoVoltar onClick={() => teste()}>
                <Icon icon="fa-solid:arrow-left" />
            </BotaoVoltar>
            <div>
                <img src={logoPlano1} />
                <h1>Driven Plus</h1>
            </div>
            <div>
                <div>
                    <Icon icon="fluent:clipboard-task-list-rtl-20-regular" />
                    <h2>Benefícios:</h2>
                </div>
                <p>1. Brindes exclusivos</p>
                <p>2. Materiais bônus de web</p>
            </div>
            <div>
                <div>
                    <Icon icon="fa-solid:money-bill-wave" />
                    <h2>Preco:</h2>
                </div>
                <p>R$ 39,99 cobrados mensalmente</p>
            </div>
            <Form>
                <input placeholder="Nome impresso no cartão" />
                <input placeholder="Digitos do cartão" />
                <div>
                    <input placeholder="Código de segurança" />
                    <input placeholder="Validade" />
                </div>
                <button>ASSINAR</button>
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