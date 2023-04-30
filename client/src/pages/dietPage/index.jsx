import React, { useEffect, useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDoubleArrowDown } from "react-icons/rx";

import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ButtonComponent from "../../components/ButtonComponent/button";

import "./style.css"
import Logo from "../../assets/logo_semfundo.png"


export default function DietPage() {
    const [showForm, setShowForm] = useState(false);
    const [page, setPage] = useState(1);

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
            title: "Título 2",
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
                                <TextField id="idade" color="primary" label="Idade"/>
                                <TextField id="idade" color="primary" label="Peso"/>
                            </ThemeProvider>
                        </div>

                        <div className="r2">
                            <ThemeProvider theme={theme}>
                                <TextField id="idade" color="primary" label="Altura"/>
                            </ThemeProvider>
                        </div>
                    </div>
                </>
        }
    ]

    return (
        <>
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
                <div className={`bottom ${showForm && "background"}`}>

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

                            <div className="butt-wrapper">
                                <ButtonComponent text="Continuar" width="100%" height="40px" onClick={() => window.alert("Chupa")} />
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}