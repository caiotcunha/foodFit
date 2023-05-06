import React, {useEffect, useState} from "react";

import "./style.css";
import BoxLogoComponent from "../../components/BoxLogoComponent"
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {Link} from "@mui/material";
import {TextField} from "@mui/material";

import {LoginSubmit} from "../../services/requests"

export default function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    LoginSubmit(email, password).then((response) => {
      localStorage.setItem('id', response.data)
      navigate("/dieta");
    });
   }

   const TypograpyTitleStyle = {
     fontStyle: 'normal',
     textAlign: 'center',
     textTransform: 'none',
     fontWeight: 400,
     fontSize:'calc(33px + 0.70vw)',
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

  const matches = useMediaQuery('(min-width:700px)');
  

    return (
      <>
        <BoxLogoComponent>
              <Typography style={TypograpyTitleStyle}>
                Login
              </Typography>

              <form
                className="form"
                onSubmit={handleSubmit}
              >
                <TextField
                    id="email-input"
                    label="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx = {{ width: '100%', marginBottom: '10px' }}
                />
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    sx = {{ width: '100%', marginBottom: '10px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="buttonSubmit" type="submit" onClick={handleSubmit} variant="contained" sx = {{ width: '100%' }}>Entrar</Button>
                <hr></hr>
              </form>

              <Link href = "/forgotPassword">
                <Typography style={TypograpySubTitleStyle}>
                  esqueci minha senha
                </Typography>
              </Link>
              
              <Link href = "/cadastro">
                <Typography style={TypograpySubTitleStyle}>
                  Criar conta!
                </Typography>
              </Link>
        </BoxLogoComponent>
      </>
    )
}