import { Icon } from '@iconify/react';
import styled from 'styled-components';

export default function Confirmacao(props) {
    return(
        <Container>
            <Icon icon="fa-solid:window-close"/>
            <div>
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                <div>
                    <button>SIM</button>
                    <button>NAO</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: blue;
`