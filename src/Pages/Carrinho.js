import React from "react";
// import { useState } from "react";
import CardCarrinho from "../Components/CardCarrinho"
import styled from "styled-components";
import { handleHome } from "../Router/coordinator"
import { useNavigate } from "react-router-dom";
import { handleFinal } from "../Router/coordinator"

export default function Carrinho(props){
    const {carrinho, setCarrinho} = props

    const navigate = useNavigate()

    let precoTotal = 0
    carrinho.map((item)=> (precoTotal = precoTotal + item.price * item.amount))

    function remover(id){
        const produto = carrinho && carrinho.find((item)=> item.id === id)

        if(produto.amount > 1){
            const novoCarrinho = carrinho.map((item)=>{
                if (produto.id === item.id && item.amount >= 1){
                    return {...item, amount: item.amount - 1}
                }else{
                    return item
                }
            })
            setCarrinho(novoCarrinho)
        }else{
            const carrinhoSemItem = carrinho.filter((item)=> item.id !== id)
            setCarrinho(carrinhoSemItem)
        }
    }

    return(
        <CarrinhoContainer>
            <div id="cart">
                Carrinho{" "}
                <span role="img" arial-label="cart">{" "}
                </span>
            </div>
            <Button onClick={()=> handleHome(navigate)}>Adicionar outras peças</Button>
            {carrinho.map((produto) => {
                return (
                    <CardCarrinho
                    key={produto.id}
                    id={produto.id}
                    image={produto.image}
                    name={produto.name}
                    amount={produto.amount}
                    price={produto.price}
                    deleteItem={remover}
                    />
                )
            })}
            <h5>Preço Total: R$ {precoTotal}</h5>
            <Button className="pedido" onClick={() => handleFinal(navigate)}>Finalizar!</Button>
        </CarrinhoContainer>
    )
}

const CarrinhoContainer = styled.main`
  display: flex;
  height: 100vh;
  background: black;
  color: purple;
  font-family: 'Staatliches', cursive;
  flex-direction: column;
  align-items: center;

  div{
    font-size:50px;
  }

  h5 {
    font-size:25px;
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
`