import React from "react";
import styled from "styled-components";
import { handleHome } from "../Router/coordinator"
import { useNavigate } from "react-router-dom";

export default function Pedido() {
    const navigate = useNavigate()

    return (
        <PedidoContainer>
            <div id="pedido">
                <div class="agradecimento">Agradecemos a sua preferência!</div>
                <div class="em-breve"> Em breve seu pedido chegará!</div>
            </div>
            
            <Button onClick={() => handleHome(navigate)}>Página Inicial</Button>
        </PedidoContainer>
    )
}

const PedidoContainer = styled.main`
background: black;
height: 100vh;
color: white;
font-family: 'Staatliches', cursive;
display:flex;
flex-direction:column;
align-items:center;

#pedido {
    display:flex;
    flex-direction:column;
    padding-top:120px;
    padding-bottom:10px;
    align-items:center;
}

.agradecimento{
    font-size:50px;
    border-bottom: 4px solid purple;
}

.em-breve{
    font-size:25px;
    padding-top:05px
}

`
const Button = styled.button`
background: purple;
color: white;
font-family: 'Staatliches', cursive;
border-radius: 2px;
height: 50px;
width: 100px;
font-size: 15px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
justify-items:center;
`