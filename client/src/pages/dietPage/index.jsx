import React, { useEffect, useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDoubleArrowDown } from "react-icons/rx";

import { TextField, Radio, RadioGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ButtonComponent from "../../components/ButtonComponent/button";

import "./style.css"
import Logo from "../../assets/logo_semfundo.png"


export default function DietPage() {
    const [showForm, setShowForm] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState({});
    const [objetivo, setObjetivo] = useState("emagrecimento")
    const [buttonText, setButtonText] = useState("Continuar")
    const [restricoes, setRestr] = useState("")
    const [dieta, setDieta] = ("");

    
    useEffect(() => {
        if(page == 2){
            setButtonText("Transformar minha Alimentação 🔥")
        }
    }, [page])


    /**
     * FAZER CONEXÃO COM O BACK AQUI, POR FAVOR COLOCAR A RESPOSTA NO STATE DIETA!
     */
    const handleSubmit = () => {
        let stringDieta = "Eu gostaria de uma dieta completa, com o objetivo de " + objetivo + ". Eu possuo " + data['altura'] + " de altura, peso " + data['peso'] + "kg e tenho " + data['idade'] + " anos.";
        
        if(restricoes !== ""){
            stringDieta = stringDieta.concat(" Não posso comer: " + restricoes);
        }

        // Beijos ao Caio que se disponibilizou a fazer a conexão com o back. Lov you.
    }


    const handleRest = (e) => {
        setRestr(e.target.value);
    }


    const handleClickButton = () => {
        if(page == 1){
            setPage(2);

        }else{
            handleSubmit();
        }
    }


    const changeData = (event) => {
        let key = event.target.id;
        let val = event.target.value;

        let newData = {
            ...data,
            [key] : val
        }

        setData(newData);
    }

    const radioChange = (event) => {
        setObjetivo(event.target.value);
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: "#4361EE",
                darker: "#3f37c9"
            },
        }
    })

    const Titles = [
        {
            title: "Vamos nos conhecer melhor!",
            index: 1
        },
        {
            title: "Um pouco mais sobre você...",
            index: 2
        }
    ];

    const Forms = [
        {
            index: 1,
            form:
                <>
                    <div className="f1">
                        <div className="r1">
                            <ThemeProvider theme={theme}>
                                <TextField id="idade" color="primary" label="Idade" type="number" onChange={(e) => changeData(e)}/>
                                <TextField id="peso" color="primary" label="Peso" type="number" onChange={(e) => changeData(e)}/>

                            </ThemeProvider>
                        </div>

                        <div className="r2">
                            <ThemeProvider theme={theme}>
                                <TextField id="altura" color="primary" label="Altura" type="number"onChange={(e) => changeData(e)} />
                            </ThemeProvider>
                        </div>
                    </div>
                </>
        },
        {
            index: 2,
            form:
                <>
                    <div className="f1">
                        <div className="r1">
                            <RadioGroup row>
                                <label>
                                    <Radio 
                                        checked={objetivo === 'emagrecimento'} 
                                        value='emagrecimento'
                                        inputProps={{'aria-label' : 'Emagrecimento'}}
                                        onChange={(e) => radioChange(e)}
                                    />
                                    Emagrecimento
                                </label>

                                <label htmlFor="">
                                    <Radio 
                                        checked={objetivo === 'massa magra'} 
                                        value='massa magra'
                                        inputProps={{'aria-label' : 'Massa Magra'}}
                                        onChange={(e) => radioChange(e)}
                                    />
                                    Massa Magra
                                </label>

                                <label htmlFor="">
                                    <Radio 
                                        checked={objetivo === 'ganho de peso'} 
                                        value='ganho de peso'
                                        onChange={(e) => radioChange(e)}
                                        inputProps={{'aria-label' : 'Perda de Peso'}}
                                    />
                                    Ganho de Peso
                                </label>
                            </RadioGroup>
                        </div>

                        <div className="r2 rest">
                            <ThemeProvider theme={theme}>
                                <TextField 
                                    multiline 
                                    fullWidth
                                    onChange={(e) => handleRest(e)}
                                    style={{height:'100%'}}
                                    maxRows='4'
                                    id="rest" 
                                    label="Alguma Restrição?"
                                    helperText="Caso não haja restrições, deixe o campo em branco."
                                />
                            </ThemeProvider>
                        </div>
                    </div>
                </>
        }
    ]

    return (
        <>
            <div className={showForm && "selected"}>
                <div className="top">
                    <img src={Logo} alt="logo foodfit" className="logo" />

                    <div className="icons">
                        <div className="user">
                            <FaRegUserCircle class="icon" />
                        </div>
                        <div className="menu">
                            <AiOutlineMenu class="icon" />
                        </div>
                    </div>

                </div>

                <div className="bottom-wrapper">
                    <div className={`bottom ${showForm && "background-hide"}`}>

                    </div>
                    {!showForm && (
                        <>

                            <div className="title">
                                Sua nova dieta começa aqui!
                            </div>

                            <div className="Arrows" onClick={() => setShowForm(true)}>
                                <RxDoubleArrowDown />
                            </div>
                        </>
                    )}
                    {showForm &&
                        <>
                            <div className="white-box">
                                <div className="quest-title">
                                    {
                                        Titles.filter(title => title.index == page).map((option) => (option.title))
                                    }
                                </div>

                                <div className="questionario">
                                    {
                                        Forms.filter(title => title.index == page).map((option) => (option.form))
                                    }
                                </div>

                                <div className="butt-wrapper" onClick={handleClickButton}>
                                    <ButtonComponent text={buttonText} width="220%" height="40px" />
                                </div>

                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}