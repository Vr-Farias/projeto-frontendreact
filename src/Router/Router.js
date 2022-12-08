import React, {useState} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../Pages/Home"
import Carrinho from "../Pages/Carrinho"
import lista from "../lista.json"
import Pedido from "../Pages/Pedido"

function Router(){
    const [carrinho, setCarrinho] = useState([])
    const [produtos, setProdutos] = useState(lista.lista)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                path="/"
                element={
                    <Home
                    produtos={produtos}
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}/>
                }/>
                <Route
                path="/carrinho"
                element={<Carrinho
                carrinho={carrinho}
                setCarrinho={setCarrinho}/>}
                />
                <Route
                path="/pedido"
                element={<Pedido
                carrinho={carrinho}
                setCarrinho={setCarrinho}/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router