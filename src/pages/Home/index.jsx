import Banner from "../../components/Banner"
import Contato from "../../components/Contato"
import EstilosGlobais from "../../components/Estilos Globais"
import Faixa from "../../components/Faixa"
import FiltrosImagens from "../../components/FiltrosImagens"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import Produtos from "../../components/Produtos"

const Home = () => {

    return (
        <>
        <EstilosGlobais/>
         <Menu/>
         <Banner/>
         <FiltrosImagens/>
         <Produtos/>
         <Faixa/>
         <Contato/>
         <Footer/>
        </>
      )

}
  


export default Home
