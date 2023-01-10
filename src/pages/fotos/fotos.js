import React from "react";
import "./styles.css"
import Header from "../../components/header/header";
import Img1 from "../../assets/image(2).jpg";
import Img2 from "../../assets/image(3).jpg";
import Img3 from "../../assets/image(4).jpeg";
import Img4 from "../../assets/image(5).jpeg";
import Img5 from "../../assets/image(6).webp";
import Img6 from "../../assets/image(7).jpeg";
import Img7 from "../../assets/image(8).jpeg";
import Img8 from "../../assets/image(9).jpeg";
import Img9 from "../../assets/OIP (1).jpeg";
import Img10 from "../../assets/OIP (2).jpeg";
import Img11 from "../../assets/OIP (3).jpeg";
import Img12 from "../../assets/OIP.jpeg";
import Footer from "../../components/footer";

function Fotos (){
    return (
        <>
            <Header/>
                <div className="backgroundBanner">
                    <span className="span-fotos">Galeria de Fotos</span>
                    <nav className="img-container">
                        <img className="img card1" src={Img1}/>
                        <img className="img card2" src={Img2}/>
                        <img className="img card3" src={Img3}/>
                        <img className="img card4" src={Img4}/>
                        <img className="img card5" src={Img5}/>
                        <img className="img card6" src={Img6}/>
                        <img className="img card7" src={Img7}/>
                        <img className="img card8" src={Img8}/>
                        <img className="img card9" src={Img9}/>
                        <img className="img card10" src={Img10}/>
                        <img className="img card11" src={Img11}/>
                        <img className="img card12" src={Img12}/>
                    </nav>
                </div>
            <Footer/>
        </>
    )
}

export default Fotos;