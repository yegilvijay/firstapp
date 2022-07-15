import React from 'react';
import { Link } from "react-router-dom";

function Login() {
    return (
        
        <>
            <div className="log-container" style={{width: "100%" , position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}>
                 <form style={{width: "360px",position: "relative",margin: "auto",borderRadius:"10px", padding:"15px 20px",background:"#78d79a"}}>
                <h3 style={{textAlign: "center"}}>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p><Link to="/sign-up.js">sign up</Link></p>
            </form>

            </div>


        </>
    );
}

export default Login;