import React, {useEffect, useState} from "react";

import "./style.css";
import BoxLogoComponent from "../../components/BoxLogoComponent"
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {Link} from "@mui/material";
import {TextField} from "@mui/material";
import { ResetPassword } from "../../services/requests";

export default function ChangePasswordPage() {

  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = localStorage.getItem('id');
    ResetPassword(id,password).then((response) => {
      console.log(response);
    });
    navigate("/login");
   }

   const TypograpyTitleStyle = {
     fontStyle: 'normal',
     textAlign: 'center',
     textTransform: 'none',
     fontWeight: 400,
     fontSize:'calc(20px + 0.50vw)',
     lineHeight: '100%',
     color: '#343434',
     height: '50px',
   }
   const TypograpySubTitleStyle = {
    fontStyle: 'normal',
    textAlign: 'center',
    textTransform: 'none',
    fontWeight: 400,
    fontSize:'calc(10px + 0.30vw)',
    lineHeight: '100%',
    color: 'grey',
    height: '50px',
    textDecoration: 'none',
  }
  

    return (
      <>
        <BoxLogoComponent>
              <Typography style={TypograpyTitleStyle}>
                Digite sua nova senha
              </Typography>

              <form
                className="form"
                onSubmit={handleSubmit}
              >
                <TextField
                    id="password-input"
                    label="senha"
                    type="password"
                    sx = {{ width: '100%', marginBottom: '10px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    id="confirm-password-input"
                    label="confirmar senha"
                    type="password"
                    sx = {{ width: '100%', marginBottom: '10px' }}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button className="buttonSubmit" type="submit" onClick={handleSubmit} variant="contained" sx = {{ width: '100%' }}>Entrar</Button>
                <hr></hr>
              </form>
        </BoxLogoComponent>
      </>
    )
}