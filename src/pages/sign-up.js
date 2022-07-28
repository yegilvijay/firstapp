import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
    };
    return (

        <>

            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Sign Up</h3>
                <div className="mb-3 demo">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    // onChange={() => setCount(count + 1)}
                    />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" >
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">sign in</Link>
                </p>
            </form>



        </>
    );
}




export default Signup;