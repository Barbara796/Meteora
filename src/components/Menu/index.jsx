import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import icone from './icone-carrinho.png'
import logo from './logo.png'

const MenuEstilizado = styled.div`
    background-color: black;
    height: 20%;
    padding: 1% 0%;
    display: flex;
    justify-content: space-around;
    width: 100%;
  

`

const ListaEstilizada = styled.ul`
    height: 3%;
    display: flex;
    align-items: center;
    gap:4%;
    font-size:1rem;
    cursor: pointer;

`
const ItemLista = styled.li`
    color: white;
    list-style-type: none;
`

 const DivEstilizada = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    gap:2%;

`

const InputEstilizado = styled.input `
    text-align: center;
    height: 5vh;
    width: 50%;
    font-size: 1rem;

`

const BotaoEstilizado = styled.button `
    height: 5vh;
    width: 12vh;
    background-color: black;
    color: white;
    border-color: white;
    font-size: 1rem;
    cursor: pointer;
` 




const IconeCarrinho = styled.img`
    width: 14%;
    height: 50%;
    cursor: pointer;
`

const LogoMeteora = styled.img `
    width: 40%;
`

const Menu = () => {

    const navigate = useNavigate();
    const handleClick = () => navigate("/carrinho")    
    const handleClickHome = () => navigate("/") 



    return(
        <MenuEstilizado>
             <ListaEstilizada>
                <LogoMeteora src={logo} onClick={handleClickHome} alt="logo meteora"/>
                <ItemLista>Nossas Lojas</ItemLista>
                <ItemLista>Novidades</ItemLista>
                <ItemLista>Promoçoes</ItemLista>
             </ListaEstilizada>
             <DivEstilizada>
                <InputEstilizado placeholder="Digite o produto"/>
                <BotaoEstilizado>Buscar</BotaoEstilizado>
                <IconeCarrinho onClick={handleClick} src={icone} alt="ícone do carrinho de compras"/>
             </DivEstilizada>
             

        </MenuEstilizado>
       
    )
}

export default Menu;