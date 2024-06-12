import { useContext } from "react";
import BannerCarrinho from "../../components/BannerCarrinho";
import EstilosGlobais from "../../components/Estilos Globais";
import Menu from "../../components/Menu"
import { CardProdutos, DescricaoProduto, ImagensProdutos, ListaProdutos, NomeProduto, PrecoProduto, TextoProduto } from "../../components/Produtos";
import { CarrinhoContext } from "../../contexto";
import Botao from "../../components/Botao";
import styled from "styled-components";


const ContainerLista = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

const SumarioCarrinho = styled.ul `
    background-color: ${props => props.background === "white"? "#FFFFFF" : "black"};;
    width: 20%;
    margin-left: 4%;
    padding: 2%;
`
const TituloSumario = styled.h3`
    color: white;
    font-size: 24px;
`

const ItemSumario = styled.li`
    display: flex;
    justify-content: space-between;

`
const TextoItemSumario = styled.p`
    color: ${props => props.color === "amarelo"? "#DAFF01" : "white"};
    font-size: 24px;
    font-weight: 400;
`

const BotaoContainer = styled.div`
    display: flex;
`


const Carrinho = () => {

    const { carrinho } = useContext(CarrinhoContext);

   
    return(
        <>
        <EstilosGlobais/>
          <Menu/>
        <BannerCarrinho/>
        <TextoProduto >Carrinho de compras</TextoProduto>
        <ContainerLista>
            <ListaProdutos width ="carrinho" background="carrinho" direction="carrinho">
                <TextoProduto alinhamento="lista" fonte="lista" color="carrinho">Detalhes da compra</TextoProduto>
                {carrinho.map(produto => (
                    <CardProdutos direction="carrinho" key={produto.id}>
                        <ImagensProdutos image="carrinho" src={produto.imagem} alt={produto.produto}/>
                        <NomeProduto color="carrinho">{produto.produto}</NomeProduto>
                        <DescricaoProduto color="carrinho">{produto.descricao}</DescricaoProduto>
                        <PrecoProduto color="carrinho">{produto.preco}</PrecoProduto>
                        <Botao onClick={() =>handleAddToCart(produto)} variante="primario" borda="primario">Adicionar Produto</Botao>
                    </CardProdutos>
                ))}
            </ListaProdutos>
            <SumarioCarrinho>
                <TituloSumario>Sumário</TituloSumario>
                <ItemSumario>
                    <TextoItemSumario>03 produtos</TextoItemSumario>
                    <TextoItemSumario>R$210</TextoItemSumario>
                </ItemSumario>
                <ItemSumario>
                    <TextoItemSumario>Frete</TextoItemSumario>
                    <TextoItemSumario>R$15</TextoItemSumario>
                </ItemSumario>
                <ItemSumario>
                    <TextoItemSumario color="amarelo">--------------------------------</TextoItemSumario>
                </ItemSumario>
                <ItemSumario>
                    <TextoItemSumario color="amarelo">Total:</TextoItemSumario>
                    <TextoItemSumario color="amarelo">R$225</TextoItemSumario>
                </ItemSumario>
                <BotaoContainer background="white">
                    <Botao>Continuar comprando</Botao>
                    <Botao variante="primario">Finalizar compra</Botao>
                </BotaoContainer>
            </SumarioCarrinho>
        </ContainerLista>
        </>
    )
}

export default Carrinho;