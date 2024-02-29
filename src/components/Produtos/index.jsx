import styled from "styled-components"
import Camiseta from './imagens/Camiseta.png'
import Calca from './imagens/Calca.png'
import Tenis from './imagens/Tenis.png'

const TextoProduto = styled.h3`
    text-align: center;
    font-size: 32px;
`
const ListaProdutos = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0% 12% 6% 12%;

`

const CardProdutos = styled.ul`
    display: flex;
    flex-direction: column;
    border: 2px solid #e0dfdf;
    padding: 0% 0%;
`

const ImagensProdutos = styled.img`

`

const BotaoProduto = styled.button `
    background-color: #9353FF;
    width: 12vw;
    border-style: none;
    text-align: center;
    margin: 2% 2% 2% 2%;
    padding: 2% 2% 2% 2%;
    color: white;
`

const NomeProduto = styled.h4`
    color: black;
    margin: 4% 2% 4% 2%;
    
`

const DescricaoProduto = styled.p`
    margin: 2% 2% 2% 2%;

`

const PrecoProduto = styled.p`
    margin: 2% 2% 2% 2%;

`


const Produtos = () => {
    return(
        <>
        <TextoProduto>Produtos que estão bombando!</TextoProduto>
        <ListaProdutos>
            <CardProdutos>
                <ImagensProdutos src={Calca}/>
                <NomeProduto>Calca blajskj</NomeProduto>
                <DescricaoProduto>kshfihsohfoshofhosho</DescricaoProduto>
                <PrecoProduto>R$12</PrecoProduto>
                <BotaoProduto>Adicionar Produto</BotaoProduto>
            </CardProdutos>
            <CardProdutos>
                <ImagensProdutos src={Camiseta}/>
                <NomeProduto>Calca blajskj</NomeProduto>
                <DescricaoProduto>kshfihsohfoshofhosho</DescricaoProduto>
                <PrecoProduto>R$12</PrecoProduto>
                <BotaoProduto>Adicionar Produto</BotaoProduto>
            </CardProdutos>
            <CardProdutos>
                <ImagensProdutos src={Tenis}/>
                <NomeProduto>Calca blajskj</NomeProduto>
                <DescricaoProduto>kshfihsohfoshofhosho</DescricaoProduto>
                <PrecoProduto>R$12</PrecoProduto>

                <BotaoProduto>Adicionar Produto</BotaoProduto>
            </CardProdutos>
        </ListaProdutos>
        </>

    )
}


export default Produtos;