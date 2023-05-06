import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import BoxLogoComponent from "../../components/BoxLogoComponent";

import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Link } from "@mui/material";
import { TextField } from "@mui/material";

import { CreateUser } from "../../services/requests"

export default function CadastroPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    CreateUser(name, email, weight, age, password, height).then((response) => {
      console.log(response);
      navigate('/login');
    }).error((err) => { console.log(err) })
  }

  const TypograpyTitleStyle = {
    fontStyle: 'normal',
    textAlign: 'center',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 'calc(33px + 0.70vw)',
    lineHeight: '100%',
    color: '#343434',
    height: '50px',
  }

  const TypograpySubTitleStyle = {
    fontStyle: 'normal',
    textAlign: 'center',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 'calc(10px + 0.30vw)',
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
          Cadastro
        </Typography>

        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="name-input"
            label="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ width: '100%', marginBottom: '10px' }}
          />

          <TextField
            required
            id="email-input"
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '100%', marginBottom: '10px' }}
          />

          <TextField
            required
            id="password-input"
            label="Password"
            type="password"
            sx={{ width: '100%', marginBottom: '10px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="r1-c">
            <TextField
              id="weight-input"
              label="Peso"
              required
              type="number"
              sx={{ width: '50%', marginBottom: '10px' }}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />


            <TextField
              id="height-input"
              required

              label="Altura"
              type="number"

              sx={{ width: '50%', marginBottom: '10px', marginLeft: "10px" }}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <TextField
            id="age-input"
            required
            label="Idade"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ width: '50%', marginBottom: '10px' }}
          />

          <Button className="buttonSubmit" type="submit" onClick={handleSubmit} variant="contained" sx={{ width: '100%' }}>Cadastrar</Button>
          {/* <hr></hr> */}
        </form>

      </BoxLogoComponent>
    </>
  )
}