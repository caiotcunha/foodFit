import React, { useEffect, useState } from "react";


import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { RxDoubleArrowDown } from "react-icons/rx";

import { TextField, Radio, RadioGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ButtonComponent from "../../components/ButtonComponent/button";

import "./style.css"
import Logo from "../../assets/logo_semfundo.png"


export default function DietPage() {
    const [showForm, setShowForm] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState({diet : "dietaX"});
    const [buttonText, setButtonText] = useState("Continuar");
    
    const [dieta, setDieta] = ("");
    

    useEffect(() => {
        if(page == 2){
            setButtonText("Transformar minha Alimentação 🔥")
        }else{
            setButtonText("Continuar!")
        }
    }, [page])


    /**
     * FAZER CONEXÃO COM O BACK AQUI, POR FAVOR COLOCAR A RESPOSTA NO STATE DIETA!
     * 
     * Todos os dados já vão estar bonitinhos em um JSON com o formato que eles querem no back:
     * {
     *      diet: "nomeDieta",
     *      weight: 65,
     *      goal: "objetivo do maluco",
     *      calories: 20000,
     *      restrictions: "restrições",
     *      UserID: ?
     * }
     * A única coisa que vai faltar ai é o UID, que eu n sei se vc tá armazenando isso em algum     lugar ou coisa assim, ai deixo em suas mãos kkkk, mas facilitei o máximo que consegui pra vc
     */
    const handleSubmit = () => {        
        console.log(data);
        
        setShowForm(false);
        setShowResult(true);

    }
    
    
    const handleBegining = () => {
        setShowForm(false);
        setShowResult(false);
        setPage(1);
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
                        <div className="title2">
                            Qual o seu objetivo?
                        </div>
                        <div className="r1">
                            <RadioGroup row>
                                <label>
                                    <Radio 
                                        checked={data['goal'] === 'emagrecimento'} 
                                        value='emagrecimento'
                                        id='goal'
                                        inputProps={{'aria-label' : 'Emagrecimento'}}
                                        onChange={(e) => changeData(e)}    
                                    />
                                    Emagrecimento
                                </label>

                                <label htmlFor="">
                                    <Radio 
                                        checked={data['goal'] === 'ganho de massa magra'} 
                                        value='ganho de massa magra'
                                        id='goal'
                                        inputProps={{'aria-label' : 'Massa Magra'}}
                                        onChange={(e) => changeData(e)}    
                                    />
                                    Massa Magra
                                </label>

                                <label htmlFor="">
                                    <Radio 
                                        checked={data['goal'] === 'ganho de peso'} 
                                        value='ganho de peso'
                                        id='goal'
                                        onChange={(e) => changeData(e)}
                                        inputProps={{'aria-label' : 'Perda de Peso'}}                    
                                    />
                                    Ganho de Peso
                                </label>
                            </RadioGroup>
                        </div>
                        <div className="title2">
                            Qual o seu peso atual? Quantas calorias quer ingerir?
                        </div>
                        <div className="r2">
                            <ThemeProvider theme={theme}>
                                <TextField id="weight" color="primary" label="Peso" type="number" onChange={(e) => changeData(e)}/>
                                <TextField id="calories" color="primary" label="Calorias" type="number" onChange={(e) => changeData(e)}/>
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
                        <div className="r2 rest">
                            <ThemeProvider theme={theme}>
                                <TextField 
                                    multiline 
                                    fullWidth
                                    onChange={(e) => changeData(e)}
                                    style={{height:'100%'}}
                                    maxRows='4'
                                    id="restrictions" 
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
            <div className={`${showResult && 'result-selected'} ${showForm && "selected"}`}>
                <div className="top">
                    <img src={Logo} alt="logo foodfit" className="logo" onClick={() => handleBegining()}/>

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
                    <div className={`bottom ${(showForm || showResult) && "background-hide"}`}></div>
                    {!showForm && !showResult &&(
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

                                {page == 2 && <div className="return" onClick={() => {setPage(1)}}>
                                    <AiOutlineArrowLeft />
                                    Voltar
                                </div>}
                            </div>
                        </>
                    }
                    {
                        showResult && 
                        <>
                            <div className="white-box">
                                <div className="quest-title">Sua nova vida está aqui!</div>
                                <div className="result">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime blanditiis officiis at corporis itaque illo velit fugit quod libero quo recusandae quis dolorem temporibus sit, earum delectus, culpa aliquam tempore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quaerat iure quidem velit placeat adipisci modi praesentium cum expedita, aut doloribus, quisquam, maiores fugit nostrum magni corporis inventore reiciendis! Ullam.lorem lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum harum non, dicta laudantium, officia eos dolores fuga explicabo, vitae eius! Totam reiciendis at sequi cum, quas voluptatum sunt dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur ducimus eos dolor architecto error, cupiditate beatae esse aut, distinctio dolores tempora? Doloremque facilis corporis voluptas nam rem, repellat quam.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam cum itaque odit quam, suscipit, unde tempore atque accusamus, ad ducimus. Excepturi et totam sit cumque quidem inventore, accusantium tempore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id excepturi laboriosam nam unde. Culpa, consequatur! Voluptatem nisi ab, rem sint necessitatibus tempore consequatur, quasi nam non veniam placeat fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nemo architecto voluptate voluptatum pariatur. Porro libero error dicta voluptates asperiores sed dolor atque dolorem reiciendis, facilis provident non eius aliquam?
                                    {dieta}
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}