import React from "react";
import './button.css'

function Btn({ text, type, clickhandler }) {
    return (
        <button type="button" className={`btn btn--${type}`} onClick={clickhandler}>
            {text}
        </button>
    )
};
export default Btn;