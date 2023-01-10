import React from "react";
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/BATMAN  _ Trailer 2 Oficial Legendado _ DC FanDome 2021.mp4';
import Cards from "../../components/cards";
import Footer from "../../components/footer";
function Home (){
    return (
        <>
        <Header />
            <div id='banner'></div>
                <div id='trailer-container'>
                    <div className='content'>
                        <video controls className='trailer'>
                            <source src={Video} />
                            Seu navegador não possui suporte para videos.  
                        </video>
                        <div id='sinopse'>
                            <p className='description'>
                            Após dois anos espreitanddo as ruas como Batman, Bruce Wayne se encontra nas profundezas
                            mais sombrias de Gothan City. Com poucos alidos confiáveis, o vigilante solitário se establece
                            como personificação da vingança para a população.
                            </p>
                            <button className='button'>Comprar Ingresso</button>
                        </div>
                    </div>
                </div>
        <Cards />
        <Footer />
        </>
    )
}

export default Home;