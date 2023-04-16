import React, {useEffect, useState} from "react";

import "./style.css";
import BoxLogoComponent from "../../components/BoxLogoComponent"
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
//import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {Link} from "@mui/material";
import ModalComponent from "../../components/ModalComponent";
import {TextField} from "@mui/material";

// useContext
// import { appContext } from "../../../../data/Context";
// import { useContext } from "react";

export default function LoginPage() {

  //const navigate = useNavigate();

  //const {setUser}  = useContext(appContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
//     LoginSubmit(email,password)
//     .then((res) => {
//       localStorage.setItem('name', res.data.name)
//       localStorage.setItem('role', res.data.role)
//       localStorage.setItem('id', res.data.roleId)
//       setUser({
//         name: res.data.name,
//         role: res.data.role,
//         id: res.data.roleId,
//       })
//       navigate("/Dashboard/Menu")
//     })
//     .catch((err) =>{ 
//       setOpen(true);
//     })
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
                    sx = {{ width: '100%', marginBottom: '10px' }}
                />
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    sx = {{ width: '100%', marginBottom: '10px' }}
                />
                <Button className="buttonSubmit" type="submit" onClick={handleSubmit} variant="contained" sx = {{ width: '100%' }}>Entrar</Button>
                <hr></hr>
              </form>
        </BoxLogoComponent>
      </>
    )
}