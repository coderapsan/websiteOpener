import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

export default function App(){
    return(
        <div className="divStyle">
            <h1 className="titleHeading"> Websites Shortcut  </h1>
            <p className="paraStyle">Which website do you want to open?</p>
            <Button name="Google"  link="https://www.google.com"></Button>
            <Button name="Facebook" link="https://www.facebook.com"></Button>
            <Button name="Youtube" link="https://www.youtube.com"></Button>
            <Button name="Instagram" link="https://www.instagram.com"></Button>
            <Button name="Twitter" link="https://www.twitter.com"></Button>
            <Button name="GitHub" link="https://www.github.com"></Button>
        </div>
    )
}