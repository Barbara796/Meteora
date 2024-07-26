import styled from "styled-components"
import Botao from "../Botao"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CarrinhoContext } from "../../contexto"

const Sumario = styled.ul `
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

const SumarioCarrinho = ({ valorTotal,quantidadeTotal }) => {

    const handleValorComFrete = valorTotal + 15
    const navigate = useNavigate();
    const handleClickHome = () => navigate("/") 


    const { clearCarrinho } = useContext(CarrinhoContext);

    const handlePurchase = () => {
        alert("Compra realizada com sucesso")
        clearCarrinho(); // Clear the cart after purchase
        navigate("/")

    };

    return(
        <Sumario>
                <TituloSumario>Sumário</TituloSumario>
                <ItemSumario>
                    <TextoItemSumario>{quantidadeTotal} produtos</TextoItemSumario>
                    <TextoItemSumario>R${valorTotal}</TextoItemSumario>
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
                    <TextoItemSumario color="amarelo">R${handleValorComFrete}</TextoItemSumario>
                </ItemSumario>
                <BotaoContainer background="white">
                    <Botao onClick={handleClickHome}>Continuar comprando</Botao>
                    <Botao onClick={handlePurchase} variante="primario">Finalizar compra</Botao>
                </BotaoContainer>
            </Sumario>
    )
}

export default SumarioCarrinho;