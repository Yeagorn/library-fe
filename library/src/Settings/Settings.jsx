import React from 'react'
import "../assets/css/web.css"
import profile from "../assets/img/profile.svg"
import logo from "../assets/img/Exclusion 1.svg"
import setImg from "../assets/img/Polygon.svg"
import { NavBar } from '../Library/Library'
import { isMobile } from 'react-device-detect'

const Settings = () => {

  if(isMobile) {
    return (
      <div className='setMain'>
        <NavBar isMobile={isMobile} library={false}/>
        <div className='msetGeneral'>
          <h1>General Settings</h1>
          <div className='msetG'>
            <p>Notifications and emails</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>User management</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Physical Libraries</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Reading events</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Invoicing</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Book Statistics</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Readers statistics</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Events statistics</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
        </div>
        <div className='msetGeneral'>
          <h1 className='mbs'>Book Settings</h1>
          <button className='msetB'>Add NEW</button>
          <div className='msetG'>
            <p>Manage Genres</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Book Visibility</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Authors Database</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Book Covers</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='msetG'>
            <p>Book Covers</p>
            <span/>
            <img src={setImg} alt=""></img>
          </div>
        </div>
    </div>
    )
  } else {
    return (
      <div className='setMain'>
        <NavBar isMobile={isMobile} library={false}/>
        <div className='setGeneral'>
        <h1>General Settings</h1>
          <div className='setG'>
            <p>Notifications and emails</p>
            <span style={{width: "27vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>User management</p>
            <span style={{width: "31.4vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Physical Libraries</p>
            <span style={{width: "31.2vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Reading events</p>
            <span style={{width: "33vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Invoicing</p>
            <span style={{width: "36.8vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Book Statistics</p>
            <span style={{width: "33vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Readers statistics</p>
            <span style={{width: "31vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Events statistics</p>
            <span style={{width: "32vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
        </div>
        <div className='setGeneral'>
        <h1>Book Settings</h1>
        <button className='sba'>Add NEW</button>
          <div className='setG'>
            <p>Manage Genres</p>
            <span style={{width: "33vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Book Visibility</p>
            <span style={{width: "33.5vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Authors database</p>
            <span style={{width: "30.8vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Book Covers</p>
            <span style={{width: "34.4vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
          <div className='setG'>
            <p>Book Covers</p>
            <span style={{width: "34.4vw"}}/>
            <img src={setImg} alt=""></img>
          </div>
        </div>
        </div>
    )
  }
}

export default Settings