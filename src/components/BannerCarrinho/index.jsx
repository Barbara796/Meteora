import styled from "styled-components"
import bannerCarrinho from './banner-carrinho.png'


const BannerCarrinhoEstilizado = styled.img`
    width: 100%;

`

const BannerCarrinho = () => {
    return(
        <>
        <BannerCarrinhoEstilizado src={bannerCarrinho}/>
        </>
    )
}

export default BannerCarrinho;