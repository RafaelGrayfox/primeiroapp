import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer";

function Contato (){
    return (
        <>
        <Header />
            <div>
                <span className="span-contato">Fale com a Gente!</span>
            </div>
            <form action='./contato'>
                <div className='form-1'>
                    <label for='name'>Nome:</label>
                    <input id="name" type={"text"} name="name" placeholder="IInsira um nome completo" />
                    <label for="email">Email:</label>
                    <input id="email" type={"email"} name="email" placeholder="Insira um email válido" />
                    <label for="telefone">Telefone:</label>
                    <input id="telefone" type={"text"} name="telefone" placeholder="+XX(XX)XXXXX-XXXX" />
                </div>
                <div className="form-2">
                    <label for="text">Sexo:</label>
                    <label for="radio">Masculino</label>
                    <input id="radio" type={"radio"} name="radio" value={"Masculino"} />
                    <label for="radio1">Feminino</label>
                    <input id="radio1" type={"radio"} name="radio" value={"Feminino"} />
                    <label for="radio2">Outros</label>
                    <input id="radio2" type={"radio"} name="radio" value={"Outros"} />
                    <textarea name="mensagem" id="mensagem" rows={"10"} placeholder="Escreva aqui sua mensagem." />
                </div>
                <div className="form-3">
                    <button className="button-1">Enviar</button>
                </div>
            </form>
            <div id="banner-contato" />
            <Footer />
        </>
    )
}

export default Contato;