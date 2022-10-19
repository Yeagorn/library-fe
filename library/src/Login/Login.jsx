import React, {useEffect, useState} from 'react';
import '../assets/css/mobile.css'
import '../assets/css/web.css'
import {isMobile} from 'react-device-detect';
import logo from "../assets/img/Exclusion 1.svg"
import {Log} from '../API/API'
import { useNavigate } from 'react-router-dom';

var isShow = false

function ShowPassword() {
    var elmnt
    var btn
    if (!isMobile) {
        elmnt = document.getElementById('pcPwd')
        btn = document.getElementById("pcBtn")
        if (!isShow) {
            btn.className = "pcView active"
            elmnt.type = "string"
            isShow = true
        } else {
            btn.className = "pcView";
            elmnt.type = "password"
            isShow = false
        } 
    } else {
        elmnt = document.getElementById('mobPwd')
        btn = document.getElementById("mobBtn")
        if (!isShow) {
            btn.className = "mobView active"
            elmnt.type = "string"
            isShow = true
        } else {
            btn.className = "mobView";
            elmnt.type = "password"
            isShow = false
        } 
    }
}

function Login(props) {

    let usr = JSON.parse(localStorage.getItem("user"))

    const [user, setUser] = useState("")
    const [pass, setPassword] = useState("")
    
    let navigate = useNavigate()
    
    const onC = async (e) => {
        let login = await Log(user, pass)
        
        if(login === true) {
            navigate("/library", { replace: true })
        }
    }


    useEffect(() => {
        if (usr && usr.token) {
            navigate("/library", { replace: true })
            return;
        } else {
            return;
        }
    }, [])

    let mobile = props.isMobile
    if (mobile) {
        return (
        <div className='mobMain'>
            <img className='mobLogo' src={logo}/>
            <div className='mobLogin'>
                <p className='wlc'>WELCOME BACK!</p>
                <div className='mobInput'>
                    <h1 className='text'>Email</h1>
                    <input type='string' id='username' onChange={(e) => setUser(e.target.value)}/>
                    <h1 className='text'>Password</h1>
                    <input type='password' id='mobPwd' onChange={(e) => setPassword(e.target.value)}/>
                    <button className='mobView' id="mobBtn" type='button' onClick={() => ShowPassword()}/>
                    <a id='recpwd' href='/'>Recover password</a>
                    <button id={
                        pass ? "mobSubmitA" : "mobSubmit"
                    } type='button' onClick={ onC }>Log in </button>
                    <h1 className='mobNoAccount'>You don't have an account? <a className='.unnamed-character-style-10' id='mobSignup' href='register'>SIGN UP HERE</a></h1>
                </div>
            </div>
        </div>)
    }
    return (
        <div className='Main'>
                <div className='pcLogin'/>
                <div className='pcPanel'>
                    <img className='pcLogo' src={logo}/>
                    <h1 className='welcomeText'>WELCOME BACK!</h1>
                    <h1 className='pcText'>Email</h1>
                    <input type="text" onChange={(e) => setUser(e.target.value)}/>
                    <h1 className='pcText password'>Password</h1>
                    <input type="password" id='pcPwd' onChange={(e) => setPassword(e.target.value)}/>
                    <button className='pcView' id='pcBtn' type='button' onClick={ShowPassword}/>
                    <a id='recPwd' href='/'>Recover password</a>
                    <button className={
                        pass ? "pcSubmit active" : "pcSubmit"
                    } id='pcSub' type='button' onClick={ onC }>Log in</button>
                    <h1 className='pcNoAccount'>You don't have an account? <a className='pcNoAccount acc' href='/register'>SIGN UP HERE</a></h1>
                </div>
        </div>
    )
}

function LoginPage() {
    return <Login isMobile={isMobile}/>
}

export default LoginPage;