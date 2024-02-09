import styled from "styled-components"
import icone from './icone-carrinho.png'
import logo from './logo.png'

const MenuEstilizado = styled.div`
    background-color: black;
    width: 100vw;
    height: 50px;
    padding: 20px 0px;
    display: flex;
    justify-content: space-around;
  

`

const ListaEstilizada = styled.ul`
    width: 45vw;
    height: 20px;
    margin: 0;
    padding: 16px 165px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const ItemLista = styled.li`
    color: white;
    list-style-type: none;
`

const DivEstilizada = styled.div`
    display: flex;
    justify-content: space-between;
`

const InputEstilizado = styled.input `
    margin-right: 8px;
    text-align: center;
    

`

const BotaoEstilizado = styled.button `
    margin-right: 16px;
    width: 80px;
    height: 40px;
    background-color: black;
    color: white;
    border-color: white;
`

const IconeCarrinho = styled.img`
    width: 65px;
    height: 40px;
`

const LogoMeteora = styled.img `
    width: 132px;
    height: 32px;
`

const Menu = () => {
    return(
        <MenuEstilizado>
             <ListaEstilizada>
                <LogoMeteora src={logo} alt="logo meteoro"/>
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