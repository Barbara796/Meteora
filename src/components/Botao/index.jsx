import styled from 'styled-components'


const Botao = styled.button `
    background-color: ${props => props.variante === "primario"? '#9353FF' : 'white'};
    width: 12vw;
    border-style: ${props => props.borda === "primario" ? 'none' : 'solid'};
    border-color: ${props => props.borda === "primario" ? 'none' : '#9353FF'};
    border-width: ${props => props.borda === "primario" ? '0' : '2px'};
    text-align: center;
    margin: 2% 2% 2% 2%;
    padding: 2% 2% 2% 2%;
    color: ${props => props.variante === "primario"? 'white' : '#9353FF'};
    cursor: pointer;

`

export default Botao