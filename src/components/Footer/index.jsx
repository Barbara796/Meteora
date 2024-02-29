import styled from "styled-components"

const FooterEstilizado = styled.footer `
    background-color: var(--preto);
    color: var(--branco-acinzentado);
    text-align: center;
    padding: 2% 0%;
`

const Footer = () => {
    return(
        <>
            <FooterEstilizado>Desenvolvido por Barbara dos Santos</FooterEstilizado>
        </>
    )
}

export default Footer;