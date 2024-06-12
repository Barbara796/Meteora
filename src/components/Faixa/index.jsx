import styled from "styled-components"
import faixa from './faixa-pagamento.png'

const Container = styled.div`
    padding: 4% 8% 6% 8%;
    background-color: black;
    
`

const TituloFaixa = styled.div`
    font-size: 2rem;
    text-align: center;
    color: #F6F6F6;
    padding: 4% 0%;

`

const FaixaEstilizada = styled.img`
    width: 100%;
    background-color: black;

`

const Faixa = () => {
    return(
        <>
        <Container>
            <TituloFaixa>Conheça todas as nossas facilidades</TituloFaixa>
            <FaixaEstilizada src={faixa}/>
        </Container>
        </>
    )
}

export default Faixa;