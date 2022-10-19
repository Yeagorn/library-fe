import React, {useEffect, useState} from 'react'
import '../assets/css/web.css';
import "../assets/css/mobile.css";
import logo from "../assets/img/Exclusion 1.svg"
import {Reg} from '../API/API'
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

var isShow = false

function ShowPassword(id, btnid) {
    var elmnt
    var btn
    if (!isMobile) {
        elmnt = document.getElementById(id)
        btn = document.getElementById(btnid)
        if(id === 'pcRegPwd') {
          if (!isShow) {
            btn.className = "pc2View active"
            elmnt.type = "string"
            isShow = true
          } else {
              btn.className = "pc2View";
              elmnt.type = "password"
              isShow = false
          }   
        } else {
          if (!isShow) {
              btn.className = "pcView active"
              elmnt.type = "string"
              isShow = true
          } else {
              btn.className = "pcView";
              elmnt.type = "password"
              isShow = false
          } 
        }
    } else {
        elmnt = document.getElementById(id)
        btn = document.getElementById(btnid)
        if(id === 'mobBtn2') {
          if (!isShow) {
            btn.className = "mobView active"
            elmnt.type = "string"
            isShow = true
          } else {
              btn.className = "mobView";
              elmnt.type = "password"
              isShow = false
          }   
        } else {
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
}

const Register = () => {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [spass, setSPass] = useState("")

  let navigate = useNavigate()
  let usr = JSON.parse(localStorage.getItem("user"))

  const onC = async (e) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(pass === spass) {
      if (user.length >= 4 && pass.length >= 6 && !specialChars.test(pass)) {
        let rUser = await Reg(user, pass)
        if (rUser.message) {
          alert(rUser.message)
          navigate("/", { replace: true })
        } else {
          alert(rUser.error)
        }
      } else {
        alert("Invalid username! Must be string with length min 4 symbols, only letters, numbers and symbol _ !; Invalid password! Must be string with length min 6 symbols, only letters and numbers!")
      }
    } else {
      alert("The passwords aren't equal.")
    }
  }

  useEffect(() => {
    if (usr && usr.token) {
      navigate("/library", { replace: true })
    }
  })

  if (isMobile) {
    return (
    <div className='mobMain'>
    <img className='mobLogo' src={logo}/>
    <div className='mobLogin'>
        <p className='wlc'>WELCOME TO THE BEST BOOK DATABASE!</p>
        <p className='mobRwlc'>Create your profile</p>
        <div className='mobRegInput'>
            <h1 className='text'>Email</h1>
            <input type='string' id='username' onChange={(e) => setUser(e.target.value)}/>
            <h1 className='text'>Password</h1>
            <input type='password' id='mobPwd' onChange={(e) => setPass(e.target.value)}/>
            <h1 className='text'>Repeat password</h1>
            <input type="password" id='mobRPwd' onChange={(e) => setSPass(e.target.value)}/>
            <button className='mobView' id="mobBtn" type='button' onClick={(e) => ShowPassword("mobPwd", e.target.id)}/>
            <button style={{top: '29.2vh'}} className='mobView' id="mobBtn2" type='button' onClick={(e) => ShowPassword("mobRPwd", e.target.id)}/>
            <button className={
                pass ? "mobRegA" : "mobReg"
            } type='button' onClick={ onC }>Register</button>
            <h1 className='mobNoAccount' style={{
              left: "10.5vw"
            }}>You have an account? <a className='.unnamed-character-style-10' id='mobSignup' href='/'>LOGIN HERE</a></h1>
        </div>
      </div>
    </div>)
  } else {
    return (
      <div className='Main'>
        <div className='pcLogin' />
        <div className='regPanel'>
          <img className='pcLogo' src={logo} />
          <h1 className='regWelcomeText'>WELCOME TO THE BEST BOOK DATABASE!</h1>
          <h1 className='underWelcomeText'>CREATE YOUR PROFILE</h1>
          <h1 className='regText'>Email</h1>
          <input type="text" />
          <h1 className='regText password'>Password</h1>
          <input type="password" id='pcPwd' />
          <h1 className='regText password'>Repeat password</h1>
          <input type="password" id='pcRegPwd' />
          <button className='pcView' id='pcBtn' type='button' onClick={(e) => ShowPassword("pcPwd", e.target.id)} />
          <button className='pc2View' id='pc2Btn' type='button' onClick={(e) => ShowPassword("pcRegPwd", e.target.id)} />
          <button className='regSubmit' id='pcSub' type='button' >Register</button>
          <h1 className='pcAccount'>You have an account? <a className='pcAccount acc' href='/'>LOG IN HERE</a></h1>
        </div>
      </div>
    )
  }
}

export default Register