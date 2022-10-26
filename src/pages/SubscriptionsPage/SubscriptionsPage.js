import styled from "styled-components"
import logoPlano1 from "../../assets/images/logoPlano1.png"
import logoPlano2 from "../../assets/images/logoPlano2.png"
import logoPlano3 from "../../assets/images/logoPlano3.png"

export default function SubscriptionsPage() {
    return(
        <Container>
            <h1>Escolha seu Plano</h1>
            <div>
                <img src={logoPlano1} alt="logo plano 1"/>
                <h2>R$ 39,99</h2>
            </div>
            <div>
                <img src={logoPlano2} alt="logo plano 2"/>
                <h2>R$ 69,99</h2>
            </div>
            <div>
                <img src={logoPlano3} alt="logo plano 3"/>
                <h2>R$ 99,99</h2>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0E0E13;
    padding: 0 43px 0;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px 0;
        background: #0E0E13;
        border: 3px solid #7E7E7E;
        border-radius: 12px;
        height: 180px;
        width: 290px;
        margin-bottom: 10px;
    }

    h1{
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        font-weight: 700;
        margin-bottom: 24px;
    }

    img{
        width: 139.38px;
        height: 95.13px;  
    }

    h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }

`