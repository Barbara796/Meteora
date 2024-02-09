
import styled from "styled-components"
import bolsas from './imagens/bolsas.png'
import calcados from './imagens/calcados.png'
import oculos from './imagens/oculos.png'
import camisetas from './imagens/camisetas.png'
import calcas from './imagens/calcas.png'
import casacos from './imagens/casacos.png'



const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 263px;
    box-sizing: border-box;
`

const ListaImagensFiltros = styled.ul `
    display: flex;
    justify-content: space-between;
`


const Imagem = styled.img`
    width: 160px;
    height: 192px;

`
const TextoFiltro = styled.h3`
    text-align: center;
    font-size: 32px;
    margin-bottom: 2%;
`

const FiltrosImagens = () => {
    return(
        <FiltroContainer>
            <TextoFiltro>Busque por categoria:</TextoFiltro>
            <ListaImagensFiltros>
                    <Imagem src={bolsas}/>
                    <Imagem src={calcados}/>
                    <Imagem src={oculos}/>
                    <Imagem src={casacos}/>
                    <Imagem src={calcas}/>
            </ListaImagensFiltros>
        </FiltroContainer>
    )
}

export default FiltrosImagens;