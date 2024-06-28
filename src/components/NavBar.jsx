
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Asesorias Industria Alimentaria</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/documentacion">Documentación</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/implementacion">Implementación BPM, HACCP</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/auditorias">Auditorías</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/prevencion">Prevención de Riesgos</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;