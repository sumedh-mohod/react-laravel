import React,{useState,useEffect} from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(){
        let item = {email,password}
        console.log(item);

        let result = await fetch("http://localhost:8000/api/login",{
            method:'post',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        console.log("Result:", result);
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add");
    }

    return (
        <>
            <Header />
            <h1>Login</h1>
            <div className='col-sm-6 offset-sm-3'>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"/>
            <br/>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
            <br/>
            <button onClick={login} className='btn btn-primary'>Login</button>
        </div>
        </>
    )
}

export default Login
