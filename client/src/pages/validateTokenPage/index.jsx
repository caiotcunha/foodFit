import React, {useEffect, useState} from "react";

import "./style.css";
import BoxLogoComponent from "../../components/BoxLogoComponent"
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";
import { ValidateToken } from "../../services/requests";

export default function ValidateTokenPage() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    ValidateToken(token).then((response) => {
      localStorage.setItem('id', response.data)
      navigate("/changePassword");
    });
   }

   const TypograpyTitleStyle = {
     fontStyle: 'normal',
     textAlign: 'center',
     textTransform: 'none',
     fontWeight: 400,
     fontSize:'calc(25px + 0.40vw)',
     lineHeight: '100%',
     color: '#343434',
     height: '50px',
     marginBottom: '10px'
   }
  const [token, setToken] = useState("");
    return (
      <>
        <BoxLogoComponent>
              <Typography style={TypograpyTitleStyle}>
                Digite o token
              </Typography>
              <form
                className="form"
                onSubmit={handleSubmit}
              >
                <TextField
                    id="token-input"
                    label="token"
                    type="text"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    sx = {{ width: '100%', marginBottom: '10px' }}
                />

                <Button className="buttonSubmit" type="submit" onClick={handleSubmit} variant="contained" sx = {{ width: '100%' }}>Enviar</Button>
                <hr></hr>
              </form>
        </BoxLogoComponent>
      </>
    )
}