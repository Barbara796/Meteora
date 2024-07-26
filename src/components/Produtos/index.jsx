import styled from "styled-components"
import Camiseta from './imagens/Camiseta.png'
import Calca from './imagens/Calca.png'
import Tenis from './imagens/Tenis.png'
import Botao from "../Botao"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CarrinhoContext } from "../../contexto"
import { useState } from "react"
import { useEffect } from "react"


export const TextoProduto = styled.h3`
    text-align: ${props => props.alinhamento === "lista" ? 'start' : 'center'};
    font-size: ${props => props.fonte === "lista" ? '1.5rem' : '2rem'};
    color: ${props => props.color === "carrinho" ? '#FFFFFF' : 'black'};
`
export const ListaProdutos = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0% 12% 6% 12%;
    background-color: ${props => props.background === "carrinho" ? '#000000' : 'white'};
    flex-direction: ${props => props.direction === "carrinho" ? "column" : "row"};
    width:${props => props.width === "carrinho" ? "30%" : "76%"};

`

export const CardProdutos = styled.ul`
    display: flex;
    flex-direction: ${props => props.direction === "carrinho" ? "row" : "column"};
    border: 2px solid #e0dfdf;
    padding: 0% 0%;
    width: 30%;

`

export const ImagensProdutos = styled.img`
    width:${props => props.image === "carrinho" ? "8vw" : "100%"};
;
`


export const NomeProduto = styled.h4`
    color: ${props => props.color === "carrinho" ? '#FFFFFF' : 'black'};
    margin: 4% 2% 4% 2%;
    
`

export const DescricaoProduto = styled.p`
    color: ${props => props.color === "carrinho" ? '#FFFFFF' : 'black'};
    margin: 2% 2% 2% 2%;

`

export const PrecoProduto = styled.p`
    margin: 2% 2% 2% 2%;
    color: ${props => props.color === "carrinho" ? 'yellow' : 'black'};

`


const Produtos = (props) => {



    const { carrinho, adicionarCarrinho, setCarrinhoStorage } = useContext(CarrinhoContext);
     const navigate = useNavigate();
 


    const produtosCards = [
        { id:'1', produto:'Calça', preco:150.00,categoria:'calca',descricao:'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.', imagem: Calca},
        { id:'2', produto:'Tênis', preco:250.00,categoria:'calcados', descricao:'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.k', imagem:Tenis},
        { id:'3', produto:'Camiseta', preco:50.00,categoria:'camiseta', descricao:'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.', imagem:Camiseta}
    ]




    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    useEffect(() => {
        const handleProducts = () => {
          const produtosFiltrados = props.category? produtosCards.filter(produto => produto.categoria === props.category) : produtosCards;
          if (produtosFiltrados.length === 0) {
            return "Produto esgotado em nossos estoques";
          } else {
            return produtosFiltrados;
          }
        }
        setProdutosFiltrados(handleProducts);
      }, [props.category])

    



    const handleAddToCart = (item) => {
        adicionarCarrinho(item);
        navigate('/carrinho');
        setCarrinhoStorage(carrinho);
    };

    return (
        <>
          <TextoProduto>Produtos que estão bombando!</TextoProduto>
          <ListaProdutos>
            {typeof produtosFiltrados === 'string'? (
              <p>{produtosFiltrados}</p>
            ) : (
              produtosFiltrados.map(produto => (
                <CardProdutos key={produto.id}>
                  <ImagensProdutos src={produto.imagem} alt={produto.produto}/>
                  <NomeProduto>{produto.produto}</NomeProduto>
                  <DescricaoProduto>{produto.descricao}</DescricaoProduto>
                  <PrecoProduto>R${produto.preco}</PrecoProduto>
                  <Botao onClick={() =>handleAddToCart(produto)} variante="primario" borda="primario">Adicionar Produto</Botao>
                </CardProdutos>
              ))
            )}
          </ListaProdutos>
        </>
      )
}


export default Produtos;