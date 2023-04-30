import React from "react";
import { useState, useEffect } from "react";

import "./button.css"

export default function ButtonComponent({ text, width, height }) {
    return (
        <div className="butt" style={{ width: width, height: height }}>
            {text}
        </div>
    )
}