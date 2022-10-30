import styled from "styled-components"

export default function UpdateUserPage() {
    return(
        <Container>
            <Form>
                <input type="text" placeholder="Fulano"/>
                <input type="number" placeholder="12345678978"/>
                <input type="email" placeholder="fulano@fulano.com"/>
                <input type="password" placeholder="senha dele"/>
                <input type="password" placeholder="senha dele"/>
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