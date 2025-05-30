import React from "react";

export const Input = ({type,placeholder,value,onChange, setToggle,name,}) => {
    return(
        <p>
            <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name= {name}
            />
            {name === "password" && <button type='button' className="eye-button" onClick={setToggle}>
                <i className={type === 'password' ? "fa fa-eye-slash" : 'fa fa-eye'}></i>
             </button>}
             {name === 'comment' &&
             <button type="button" className="eye-button">
                <i className="fa fa-comment-o"></i>
             </button>
             }
        </p>
    )
}