// src/components/landing.tsx
import React from 'react';
import '../styles/Landing.css';

const Landing: React.FC = () => {
 //Landing page sobre robotizacion de procesos y empresas
    const handleStart = () => {
        window.location.href = '/survey';
    }

    return(
        <div className='landing-container'>
            <div className='landing-content'>
                <h1>Encuesta sobre automatización y robotizacion de procesos</h1>
                <p>Descubre como la automatizacion de procesos transformará tu negocio</p>
            </div>
            <button onClick={handleStart} className='start-button'>Comenzar cuestionario</button>
        </div>
    )
}
export default Landing;