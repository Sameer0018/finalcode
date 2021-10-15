import React, { useState, useContext } from 'react';
import '../css/Signup.css'
import { useHistory } from "react-router";
import instance from '../requests/instance';
import {UserContext} from '../App';

const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await instance.post("/signin", { email, password })


        const data = res.data;

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentails");
        } else {
            dispatch({type:'USER', payload: true})
            window.alert("Login Successful");
            history.push("/");
        }

       
    }
    return(
        <>
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Login</h2>
                </div>
                <form method= "POST" className="form-wrapper">
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>


                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    
                    <div>
                        <button className="submit" onClick={loginUser}>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;