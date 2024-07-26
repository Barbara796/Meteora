import { useContext, useMemo, useState } from "react";
import BannerCarrinho from "../../components/BannerCarrinho";
import EstilosGlobais from "../../components/Estilos Globais";
import Menu from "../../components/Menu"
import { ImagensProdutos, PrecoProduto, TextoProduto } from "../../components/Produtos";
import { CarrinhoContext } from "../../contexto";
import styled from "styled-components";
import SumarioCarrinho from "../../components/SumarioCarrinho";




const ContainerLista = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
`

export const ListaCarrinho = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0% 6% 6% 1%;
    background-color: #000000;
    flex-direction: column;
    width:50%;

`

const CardCarrinho = styled.ul`
    display: flex;
    background-color: black;
    align-items: center;
    gap: 18%;
    margin-bottom: 6%;


    
`

const DivImagensDescricao = styled.div`
    display: flex;
    justify-content: space-between;
    gap:10%

`

const DivDescricao = styled.div`
    display: flex;
    flex-direction: column;
   
`

const NomeProdutoCarrinho = styled.p`
    color:#FFFFFF;
    font-weight: 600;
`

const DescricaoProdutoCarrinho = styled.p`
    color:#FFFFFF;
    width: 200%;

`
const DivContador = styled.div`
    display: flex;
    flex-direction: column;
`

const DivIconesContador = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right:4%;
`

const TextoContador = styled.p`
    color: white;
`

const IconeLixeira = styled.i `
    color: white;
    width: 100%;
    cursor: pointer;
`

const IconeSoma = styled.img`
    width: 30%;
    height: 10%;
    cursor: pointer;
`

const IconeSubtracao = styled.img`
    width: 30%;
    height: 10%;
    cursor: pointer;

`

const InputItens = styled.input`
    width: 2vw;
    height: 10%;
    background-color: black;
    color:white;
    text-align: center;
`

const BotaoContainer = styled.div`
    display: flex;
`




const Carrinho = () => {

    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    const [sumario, setSumario] = useState("")


    
     const handleSum = (item) => {


        setCarrinho(
            carrinho.map((i) =>
                i.id === item.id? {...i, quantidade: i.quantidade + 1 } : i
            )
        );

    };

    const handleSub = (item) => {
        setCarrinho(
            carrinho.map((i) =>
            i.id === item.id? {...i, quantidade: i.quantidade - 1 } : i
            )
        );
    }; 

    const handleQuantityChange = (item, newValue) => {
        setCarrinho(
            carrinho.map((i) =>
            i.id === item.id ? { ...i, quantidade: newValue } : i
            )
        );

    };

    const valorTotal = useMemo(() => {
        return carrinho.reduce((acumulado, item) => {
            return acumulado + (item.preco * item.quantidade);
        }, 0);
    }, [carrinho]);

    const quantidadeTotal = useMemo(() => {
        return carrinho.reduce((acumulado, item) => {
            return acumulado +  item.quantidade;
        }, 0);
    }, [carrinho]);
   
    return(
        <>
        <EstilosGlobais/>
          <Menu/>
        <BannerCarrinho/>
        <TextoProduto >Carrinho de compras</TextoProduto>
        <ContainerLista>
            <ListaCarrinho>
                 <TextoProduto alinhamento="lista" fonte="lista" color="carrinho">Detalhes da compra</TextoProduto>
                {carrinho.map(produto => (
                   <CardCarrinho key={produto.id}>
                        <DivImagensDescricao>
                            <ImagensProdutos image="carrinho" src={produto.imagem} alt={produto.produto}/>
                            <DivDescricao>
                                <NomeProdutoCarrinho>{produto.produto}</NomeProdutoCarrinho>
                                <DescricaoProdutoCarrinho>{produto.descricao}</DescricaoProdutoCarrinho>
                            </DivDescricao>
                        </DivImagensDescricao>
                        <PrecoProduto color="carrinho">R${produto.preco}</PrecoProduto>
                        <DivContador>
                            <TextoContador>Quantidade:</TextoContador>
                            <DivIconesContador>
                                <button onClick={()=> handleSub(produto)} > - </button>
                                <InputItens value={produto.quantidade} onChange={(e) => handleQuantityChange(produto, parseInt(e.target.value, 10))} />
                                <button onClick={()=>handleSum(produto)}>+</button>
                            </DivIconesContador>
                        </DivContador>
                        <IconeLixeira className="fa-regular fa-trash"/>
                    </CardCarrinho>
                ))}
            </ListaCarrinho>
            <SumarioCarrinho valorTotal={valorTotal} quantidadeTotal={quantidadeTotal}/>
        </ContainerLista>
        </>
    )
}

export default Carrinho;