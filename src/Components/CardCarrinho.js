import React from "react"
import styled from "styled-components"

export default function CardCarrinho({
    id,
    image,
    name,
    amount,
    price,
    deleteItem
}) {
    return(
        <CardContainer>
            <Image src={image}/>
            <P>{name}</P>
            <P>
                Und <b>{amount}</b>  
            </P>
            <P>R${price}</P>
            <DeleteButton onClick={()=> deleteItem(id)}>x</DeleteButton>
        </CardContainer>
    )
}

const Image = styled.img`
  width: 30%;
`
const DeleteButton = styled.button`
  background-color: purple;
  border: none;
`
const CardContainer = styled.section`
  width: 400px;
  border: 5px solid purple;
  border-radius: 2px;
  display: flex;
  align-items: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
  background-color:white;
  color:black;
`
const P = styled.p`
  font-size: 18px;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
`