
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [passerror, setPasserror] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email.length === 0){
            setError(true)
        }else{
            setError(false)
        }

        if(password.length === 0){
            setPasserror(true)
        }else{
            setPasserror(false)
        }
        
       console.log(email,password,error,passerror);
      };               
    return (
        
        <>
      

            <div className="log-container" style={{width: "100%" , position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}>
           <h1>Home</h1>>

            </div>


        </>
    );
}

export default Login;