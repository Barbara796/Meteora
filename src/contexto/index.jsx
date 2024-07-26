import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children}) =>{
    const [carrinho, setCarrinho] = useState([]);
    const [carrinhoStorage, setCarrinhoStorage] = useState(() => {
      const storedCarrinho = sessionStorage.getItem('carrinho');
      return storedCarrinho ?? []; 
    });

  
    useEffect(() => {
      sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    }, [carrinho]);

    const adicionarCarrinho = (item) => {
      const existingItem = carrinho.find((i) => i.id === item.id);
      if (existingItem) {
        setCarrinho(
          carrinho.map((i) =>
            i.id === item.id? {...i, quantidade: i.quantidade + 1 } : i
          )
        );
      } else {
        setCarrinho((prevCarrinho) => [...prevCarrinho, {...item, quantidade: 1 }]);
      }      }; 
    

      const clearCarrinho = () => {
        setCarrinho([]);
        sessionStorage.removeItem('carrinho');
      };

      return (
        <CarrinhoContext.Provider value={{ carrinho,  adicionarCarrinho, carrinhoStorage, setCarrinhoStorage, setCarrinho, clearCarrinho }}>
        {children}
        </CarrinhoContext.Provider>
      );
}

