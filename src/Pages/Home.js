import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { handleCart } from "../Router/coordinator";
import CardProdutos from "../Components/CardProdutos"
import styled from "styled-components";
import Filter from "../Components/Filter"
// import lista from "../lista.json"

function Home(props) {
    const [buscaNome, setBuscaNome] = useState("")
    const [ordenar, setOrdenar] = useState("")

    const { carrinho, setCarrinho, produtos } = props
    const navigate = useNavigate()

    function comprar(id) {
        const i = carrinho.findIndex((item) => item.id === id)
        if (i !== -1) {
            const novoCarrinho = [...carrinho]
            novoCarrinho[i] = {
                ...novoCarrinho[i],
                amount: novoCarrinho[i].amount + 1
            }
            setCarrinho(novoCarrinho)
        } else {
            const encontrarProduto = produtos.find((produto) => produto.id === id)
            const novoProduto = { ...encontrarProduto, amount: 1 }
            const novaLista = [...carrinho, novoProduto]
            setCarrinho(novaLista)
        }
    }

    return (
        <HomeContainer>
            <div>LOJINHA ESPACIAL</div>
            <h4>PRODUTOS ESPACIAS PARA VOCÊ</h4>
            <Filter
                buscaNome={buscaNome}
                setBuscaNome={setBuscaNome}
                ordenar={ordenar}
                setOrdenar={setOrdenar}
            />
            <Button className="carrinho" onClick={() => handleCart(navigate)}>Ir para o carrinho</Button>
            <ProdutosContainer>
                {produtos
                    .filter((lista) => {
                        return lista.name
                            .toLowerCase()
                            .includes(buscaNome.toLocaleLowerCase())
                    })
                    .sort((a, b) => {
                        if (ordenar === "crescente") {
                            return a.price > b.price ? 1 : -1
                        } else if (ordenar === "decrescente") {
                            if (a.price < b.price) {
                                return 1
                            } else {
                                return -1
                            }
                        }
                    })
                    .map((produto) => {
                        return <CardProdutos
                            produto={produto}
                            key={produto.id}
                            comprar={comprar}
                        />
                    })}
            </ProdutosContainer>
        </HomeContainer>
    )
}

export default Home

const ProdutosContainer = styled.section`
display: flex;
flex-wrap: wrap;
width:100%;
align-items: center;
justify-content: center;
background-color:white;
`
const HomeContainer = styled.main`
color: white;
height: 100%;
background: purple;
display: flex;
flex-direction: column;
align-items: center;

div {
    border-bottom: 5px double black;
    border-radius: 5px;
    font-family: 'Staatliches', cursive;
    font-size:40px;  
    background-color:black;
    padding:10px;
    width:100%;
    text-align:center;
}

h4 {
    font-family: 'Staatliches', cursive;
    font-size:20px;  
    background-color:black;
    margin-top:-10px;
    padding:10px;
    width:100%;
    text-align:center;
}

`
const Button = styled.button`
background: black;
color: white;
border: 0px solid white;
border-radius: 2px;
height: 50px;
width: 100px;
font-size: 20px;
font-family:'Staatliches', cursive;

`
// const Img = styled.img`
// border: 10px solid #ab0000;
// border-radius: 50%;
// background: rgb(171,0,0);
// background: linear-gradient(90deg, rgba(171,0,0,1) 45%, rgba(255,0,0,1) 100%);
// `