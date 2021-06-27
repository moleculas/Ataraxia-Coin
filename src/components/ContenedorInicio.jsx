import React from 'react'
import logo from '../images/logo.png'
import '../App.css'

const ContenedorInicio = () => {

        return (
        <div className="Inicio">
            <header className="Inicio-header">
                <img src={logo} className="Inicio-logo" alt="logo" />
                <p>
                    Editar <code>src/componentes/ContenedorInicio.jsx</code> y guardar para recargar.
                </p>
                <a
                    className="Inicio-link"
                    href="https://artikaweb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Desarrollos artikaWeb
                </a>
            </header>          
        </div>        
    )
}

export default ContenedorInicio
