import React, {Fragment, useEffect, useState} from "react";

import "./style.css";
import BoxLogoComponent from "../../components/BoxLogoComponent"
import { Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {Link} from "@mui/material";
import {TextField} from "@mui/material";

import {GetAllDiets} from "../../services/requests"

import Grape from "../../assets/grape_semfundo.png"

export default function ListDietsPage() {

    const [selected, setSelected] = useState(null);
    const [arrayDiets, setArrayDiets] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        GetAllDiets().then((response) => {
            setArrayDiets(response.data);
            setLoading(false);
        });
    }, []);


  const navigate = useNavigate();

   const TypograpyTitleStyle = {
     fontStyle: 'normal',
     textAlign: 'left',
     textTransform: 'none',
     fontWeight: 400,
     fontSize:'calc(33px + 0.70vw)',
     lineHeight: '100%',
     color: '#343434',
     height: '50px',
   }

  const BoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    minWidth: '268px',
    minHeight: '468px',
    height: '60vh',
    bgcolor: 'var(--white)',
    boxShadow: '0px 0px 84px rgba(0, 0, 0, 0.15)',
    borderRadius:'10px',
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    whiteSpace: 'pre-wrap',
    };
    function NewlineText(props) {
        const text = props.text;
        return (
        <div className="dieta">
            {text}
            <Button className="buttonSubmit" type="submit" onClick={()=>{setSelected(null)}} variant="contained" sx = {{ width: '100%', marginTop:'20px' }} alignSelf="center">Voltar</Button>
        </div>);
    }

    return (
      <>
      <div className="BoxLogo">
            <Grid
            container 
            direction="row"
            sx={BoxStyle}
            >
            {
                selected ===0 || selected ?
                <NewlineText text={arrayDiets[selected].diet} />
                :
                <List>
                    {
                        isLoading ? <p>Loading...</p> :
                        arrayDiets.map((dieta,index) => (
                        <Fragment>
                            <ListItem style={{width: '30vw', height:'80px'}}>
                                <ListItemButton onClick={()=>{setSelected(index)}}>
                                    <ListItemIcon>
                                        <img src={Grape} alt="Grape" style={{width: '40px', height: '40px', alignSelf:'center'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary={`Dieta ${index}`} />
                                </ListItemButton>
                            </ListItem>
                        </Fragment>
                        ))
                    }
                </List>
            }
            </Grid>
      </div>
      </>
    )
}