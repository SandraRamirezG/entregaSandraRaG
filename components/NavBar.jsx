import React from 'react';

// const NavBar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container">
//                 <a className="navbar-brand" href="#">Brand</a>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Categoría 1</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Categoría 2</a>
//                         </li>
//                         import React from 'react';
//                         import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Brand</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tablas Nutricionales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Implementación BPM, HACCP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Prevención de Riesgos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Auditorias BPM, HACCP, ISO 9001; 2015, Prevención de Riesgos</a>
                        </li>

                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

//                         export default NavBar;
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;

