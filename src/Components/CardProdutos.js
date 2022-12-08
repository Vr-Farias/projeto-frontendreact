import React from "react";
import styled from "styled-components";
// import Filter from "../Components/Filter"
// import lista from "../lista.json"
// import { useState } from "react";

export default function CardComidas(props) {
    const { produto, comprar } = props

    return (
        <CardContainer>
            <Image src={produto.image} alt={produto.name} />
            <p>{produto.name}</p>
            <p>R${produto.price}</p>
            <Button onClick={() => comprar(produto.id)}>Adicionar ao carrinho!</Button>
        </CardContainer>
    )
}

const Image = styled.img`
width: 80%;
border-radius: 50%;
`
const CardContainer = styled.section`
width: 150px;
color: black;
font-family:'Staatliches', cursive;
border: 1px solid white;
border-radius: 10px;
background: white;
margin: 10px;
padding: 10px;

`
const Button = styled.button`
background: purple;
color: white;
font-family:'Staatliches', cursive;
border: 0px solid white;
border-radius: 2px;
height: 50px;
width: 100px;
font-size: 15px;

`
