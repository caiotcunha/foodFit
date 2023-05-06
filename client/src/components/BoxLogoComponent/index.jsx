import React from "react";
import "./style.css";
import Stack from '@mui/material/Stack';
import Grape from './../../assets/grape_semfundo.png'

import {
  Grid
} from '@mui/material';

import Divider from '@mui/material/Divider';

export default function BoxLogoComponent(props) {

    const BoxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '62vw',
        minWidth: '268px',
        minHeight: '468px',
        height: '55vh',
        bgcolor: 'var(--white)',
        boxShadow: '0px 0px 84px rgba(0, 0, 0, 0.15)',
        borderRadius:'10px',
        display:'flex',
        justifyContent:"center",
        alignItems:"left",
    };

  return (
    <div className="BoxLogo">
        
        <Grid
            container 
            direction="row"
            sx={BoxStyle}
            >
                <Grid item xs={6} className= "LeftBox" display="flex" alignContent="center" justifyContent="center">
                    <Stack spacing={2} width="100%" display="flex" alignContent="center" justifyContent="center">
                        <img src={Grape} alt="Grape" style={{width: '200px', height: '200px', alignSelf:'center'}}/>
                    </Stack>
                    <Divider width="2px" orientation="vertical"/>
                </Grid>
                <Grid item xs={6} display="flex" flexDirection="column" alignContent="center" justifyContent="center">
                    {props.children}
                </Grid>

            </Grid>
        </div>
      )
        //     :
        //     <Grid
        //     container 
        //     direction="column"
        //     sx={BoxStyle}
        //     >
        //         <Grid item xs={12} className= "SLeftBox" display="flex">

        //             <Stack spacing={0} width="100%" display="flex" alignContent="center" justifyContent="center">
        //                 <ArrowBackIcon color="green" fontSize="large" style={ArrowPlacement} onClick={props.onClick}/>
        //                 <h1>LOGO</h1>
        //                 {props.children}
        //             </Stack>

        //         </Grid>

        //     </Grid>
        // }

}