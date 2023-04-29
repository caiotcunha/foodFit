import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer(){

    const iconStyle = {
        padding: '15px',
        width:'50px',
        height:'50px',
        background: '#fff',
        color: '#7209b7',
        borderRadius: '100%',
        fontSize: '2rem',
        marginRight: '25px'
    }

    return (
        <Grid container className='Footer' sx={{background:'#7209b7'}} id="contact">
            <Grid item xs={12}>
                <Typography variant='h4' color='#fff' paddingTop={3} textAlign="center">
                    FoodFit
                </Typography>
                <Typography color='#fff' textAlign="center">
                Inteligência artificial para sua dieta
                </Typography>
            </Grid>
            <Grid item xs={12}  paddingTop={3} display="flex" justifyContent="center">
                <a target='_blank' href="">
                    <WhatsAppIcon sx={iconStyle}/>
                </a>
                <a target='_blank' href="">
                    <FacebookIcon sx={iconStyle}/>
                </a>
                <a target='_blank' href="">
                    <MailIcon sx={iconStyle}/>
                </a>
                <a target='_blank' href="">
                    <LinkedInIcon sx={iconStyle}/>
                </a>
            </Grid>
        </Grid>
    )
}

