import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/images (1).jpg';

function Footer() {
    return (
        <footer>
            <img style={{objetctFit:'contain'}} id='logo' src={Logo}/>
                <span className='footer-span'>Todos os direitos reservados ©</span>
                <span className='footer-span'>Desenvolvido por: Rafaael Nogueira</span>
                <nav className='footer-navigation'>
                    <ul className='footer-list'>
                    <Link style={{ textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                    </ul>
                </nav>
        </footer>
    )
}

export default Footer