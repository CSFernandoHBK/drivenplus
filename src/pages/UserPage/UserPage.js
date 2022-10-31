import { Icon } from "@iconify/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"

export default function UserPage() {
    const params = useParams();
    const navigate = useNavigate();
    const infoUser = JSON.parse(localStorage.getItem("infoUser"));
    const {name, cpf, email} = infoUser;
    console.log(infoUser);

    return(
        <Container>
            <Link to={`/home`}>
                <BotaoVoltar>
                    <Icon icon="fa-solid:arrow-left" />
                </BotaoVoltar>
            </Link>
            <Form>
                <input type="text" defaultValue={`${name}`} disabled/>
                <input type="number" defaultValue={`${cpf}`} disabled/>
                <input type="email" defaultValue={`${email}`} disabled/>
                <button onClick={() => navigate(`/users/${params.id}/update`)}>ATUALIZAR</button>
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