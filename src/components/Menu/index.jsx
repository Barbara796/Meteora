import styled from "styled-components"
import icone from './icone-carrinho.png'
import logo from './logo.png'

const MenuEstilizado = styled.div`
    background-color: black;
    height: 20%;
    padding: 1% 0%;
    display: flex;
    justify-content: space-around;
  

`

const ListaEstilizada = styled.ul`
    height: 3%;
    display: flex;
    align-items: center;
    gap:24px;


`
const ItemLista = styled.li`
    color: white;
    list-style-type: none;
`

 const DivEstilizada = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    gap:10px;

`

const InputEstilizado = styled.input `
    text-align: center;
    height: 5vh;
    

`

const BotaoEstilizado = styled.button `
    height: 5vh;
    width: 12vh;
    background-color: black;
    color: white;
    border-color: white;
` 




const IconeCarrinho = styled.img`
    width: 65px;
    height: 40px;
`

const LogoMeteora = styled.img `
    width: 22vh;
`

const Menu = () => {
    return(
        <MenuEstilizado>
             <ListaEstilizada>
                <LogoMeteora src={logo} alt="logo meteora"/>
                <ItemLista>Nossas Lojas</ItemLista>
                <ItemLista>Novidades</ItemLista>
                <ItemLista>Promoçoes</ItemLista>
             </ListaEstilizada>
             <DivEstilizada>
                <InputEstilizado placeholder="Digite o produto"/>
                <BotaoEstilizado>Buscar</BotaoEstilizado>
                <IconeCarrinho src={icone} alt="ícone do carrinho de compras"/>
             </DivEstilizada>
             

        </MenuEstilizado>
       
    )
}

export default Menu;