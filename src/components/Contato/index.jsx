import styled from "styled-components"




const CardContato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4% 0%;
    border: 2px solid black;
    margin: 10% 24%;
    
`
const TextoContato = styled.p`
    width: 26vw;
    text-align: center;
    padding: 0% 0% 2% 0%;

`

const DivContato = styled.div `
    display: flex;
`

const InputContato = styled.input `
    width: 30vw;
    height: 5vh;
`

const BotaoContato = styled.button `
    background-color: var(--roxo);
    color: var(--branco-acinzentado);
    width: 5vw;
`

const Contato = () => {
    return(
        <>
        <CardContato>
            <TextoContato>
                Quer receber nossas novidades, 
                promoções exclusivas e 10% OFF na primeira compra? 
                Cadastre-se!
            </TextoContato>
            <DivContato>
                <InputContato placeholder="Digite seu email"/>
                <BotaoContato>Enviar</BotaoContato>
            </DivContato>

        </CardContato>
        </>
    )
}

export default Contato;