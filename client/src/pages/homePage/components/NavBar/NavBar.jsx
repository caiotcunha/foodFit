import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grape from '../../../../assets/grape_semfundo.png'

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', backgroundColor:'#7209b7'}}>
            <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{backgroundColor:'#FFFFFF'}}
            >
                <img src={Grape} alt="Grape" style={{width: '35px', height: '35px'}}/>
            </IconButton>
            <Button color="inherit" sx={{borderRadius:'10px',backgroundColor:'#FFFFFF', color:'#7209b7'}}>Login</Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar