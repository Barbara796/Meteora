
import styled from "styled-components"
import bolsas from './imagens/bolsas.png'
import calcados from './imagens/calcados.png'
import oculos from './imagens/oculos.png'
import camisetas from './imagens/camisetas.png'
import calcas from './imagens/calcas.png'
import casacos from './imagens/casacos.png'
import Produtos from "../Produtos"
import { useState } from "react"
import { useEffect } from "react"



const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 4% 20% 4% 20%;
    gap: 2%;
`

const ListaImagensFiltros = styled.ul `
    display: flex;
    justify-content: space-between;
`


const Imagem = styled.img`
    width: 15%;
    height: 12%;

`
const TextoFiltro = styled.h3`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2%;
`

const FiltrosImagens = () => {

    const [nameFilter, setNameFilter] = useState('');

    const handleFilterChange = (nameFilter) => {
        setNameFilter(nameFilter);
      };


    const imagensFiltros = [
        {
            id:1,
            src:bolsas,
            categoria:'bolsas'
        },
        {
            id:2,
            src:calcados,
            categoria:'calcados'
        },
        {
            id:3,
            src:oculos,
            categoria:'oculos'
        },
        {
            id:4,
            src:casacos,
            categoria:'casacos'
        },
        {
            id:5,
            src:calcas,
            categoria:'calca'
        },
    ]

   

      
    return(
        <FiltroContainer>
            <TextoFiltro>Busque por categoria:</TextoFiltro>
            <ListaImagensFiltros>
                    {imagensFiltros.map(imagem =>(
                        <Imagem key={imagem.id} 
                         category={imagem.categoria}
                         src={imagem.src}
                         onClick={()=>handleFilterChange(imagem.categoria)}/>
                    ))
                    }
            </ListaImagensFiltros>
            <Produtos category={nameFilter}/>
        </FiltroContainer>
    )
}

export default FiltrosImagens;