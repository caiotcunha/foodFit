import React, { useEffect, useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import "./style.css"
import Logo from "../../assets/logo_semfundo.png"

export default function DietPage() {
    return (
        <>
            <div className="top">
                <img src={Logo} alt="logo foodfit" className="logo" />
                <div className="icons">
                    <div className="user">
                        <FaRegUserCircle class="icon"/>
                    </div>
                    <div className="menu">
                        <AiOutlineMenu class="icon"/>
                    </div>
                </div>

            </div>
            <div className="bottom">

            </div>
        </>
    );
}