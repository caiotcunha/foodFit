import * as React from 'react';
import './style.css'
import Grape from '../../../../assets/grape_semfundo.png'
import IconButton from '@mui/material/IconButton';

// components
import Button from '@mui/material/Button';

export default function About() {

    return (
        <>
            <div className="AboutContainer">
                <div className="AboutText">
                    <h2>Nosso sistema utiliza uma IA para gerar uma dieta personalizada, de acordo com os seus interesses e necessidades!</h2>
                </div>
                <div className="Button">
                    <IconButton
                    size="large"
                    edge="center"
                    color="inherit"
                    aria-label="menu"
                    sx={{backgroundColor:'#FFFFFF'}}
                    >
                        <img src={Grape} alt="Grape" style={{width: '100px', height: '100px'}}/>
                    </IconButton>
                </div>
            </div>
        </>
    )
}
