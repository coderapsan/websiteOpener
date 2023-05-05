import React from "react";
import  ReactDOM  from "react";

export default function Button(props){
    function goTOLink(){
        return(
            <a href={props.link}/>
        )
    }
    
    return(
        <a href={props.link}>
            <button className="buttonStyle" name={props.name} onClick={goTOLink}> {props.name} </button>

        </a>

        
    )
}