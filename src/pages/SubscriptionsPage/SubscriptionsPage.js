import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { urlAPI } from "../../constants/URLs";

export default function SubscriptionsPage() {
    const infoUser = JSON.parse(localStorage.getItem("infoUser"));
    const [planos, setPlanos] = useState([]);

    const config = {
        headers: {
            "Authorization": `Bearer ${infoUser.token}`
        }
    };

    useEffect(() => {
        const requisicao = axios.get(`${urlAPI}subscriptions/memberships`, config);
        requisicao.then((r) => setPlanos(r.data))
        requisicao.catch((err) => console.log(err))
    }, [])

    return(
        <Container>
            <h1>Escolha seu Plano</h1>
            {planos.map((p) =>
            <Link to={`/subscriptions/${p.id}`} key={p.id}>
                <div>
                    <img src={p.image} alt={`logo do plano ${p.id}`}/>
                    <h2>R$ {p.price}</h2>
                </div>
            </Link> 
            )}
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