import styled from "styled-components"
import banner from './banner.png'


const BannerEstilizado = styled.img`
    width: 100%;

`

const Banner = () => {
    return(
        <>
        <BannerEstilizado src={banner}/>
        </>
    )
}

export default Banner;