import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const CarrinhoContext = createContext("")

export const CarrinhoProvider = ({ children}) =>{
    const [carrinho, setCarrinho] = useState([]);
    const [carrinhoStorage, setCarrinhoStorage] = useState(() => {
      const storedCarrinho = sessionStorage.getItem('carrinho');
      return storedCarrinho? JSON.parse(storedCarrinho) : [];
    });
  
    useEffect(() => {
      sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    }, [carrinho]);

    const adicionarCarrinho = (item) => {
        setCarrinho((prevCarrinho) => [...prevCarrinho, item]);
      };
    
      return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarCarrinho, carrinhoStorage, setCarrinhoStorage }}>
        {children}
        </CarrinhoContext.Provider>
      );
}

