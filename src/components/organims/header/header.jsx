import React from 'react';
import logo from '../../../images/rick-y-morty.png';
import './header.scss';

const Header = props => {
    return ( 
        <header className="o-header">
            <div className="o-header-logo">
                <img src={logo} alt=""/>
            </div>
            <nav className="o-header-nav">
                <ul className="o-header-nav-items">
                    <li className="o-header-nav-items-item"><a href="/">Inicio</a></li>
                    <li className="o-header-nav-items-item"><a href="/personajes/1">Personajes</a></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;