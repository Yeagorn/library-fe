import React, {useEffect, useState} from 'react'
import '../assets/css/web.css'
import '../assets/css/mobile.css'
import profile from "../assets/img/profile.svg"
import logo from "../assets/img/Exclusion 1.svg"
import {initLibrary} from "../API/API"
import dateFormat from 'dateformat';
import {isMobile} from 'react-device-detect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'

function display(index) {
  var st = {
    style: {
      display: index ? "block": "none"
    }
  }
  return st.style.display
}

function style(index) {
  var style = {
    styles: {
      height: index === "618a7789efb465359670fd2d" ? "39vh" : "37vh"
    }
  }
  return style.styles.height
}

function LibDiv(props) {
  if (!isMobile) {
    return <div className='libRow'>
      <FetchLibrary data={props.data} query={props.query}/>
    </div>
  } else {
    return <FetchLibrary data={props.data} query={props.query}/>
  }
}

function NavBar(props) {
  let isMobile = props.isMobile
  let library = props.library

  const [nav, setNav] = useState(false)

  const handleMobBar = () => {
    setNav(!nav);
  }

  if(!isMobile) {
    return(
      <div className='libNavBar'>
        <img className='libLogo' src={logo} alt="digibooks logo"></img>
        <img className='libProfile' src={profile} alt="digibooks profile"></img>
        <a className={
          library ? "libBut active": 'libBut'
        } href='/library'>LIBRARY</a>
        <a className={
          library ? "libBut": 'libBut active'
        } href='/settings'>SETTINGS</a>
      </div>
    )
  } else {
    return (
      <div className='mNavBar'>
          <a className='mNavBarBut'><FontAwesomeIcon icon={ nav ? faXmark : faBars} size="xl" onClick={handleMobBar}/></a>
          <img className='mlibLogo' src={logo}></img>
          <img className='mlibProfile' src={profile}></img>
          <div className='mNav' style={{display: display(nav)}}>
          <a className={
          library ? "mlibBut active": 'mlibBut'
        } href='/library'>LIBRARY</a>
        <a className={
          library ? "mlibBut": 'mlibBut active'
        } href='/settings'>SETTINGS</a>
          </div>
      </div>
    )
  }
}

function FetchLibrary({data, query}) {

  let navigate = useNavigate()

  if (data) {
    if(isMobile) {
      return data.filter(post => {
        if (query === '') {
          return post;
        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => (
        <div className="mlibKniga" key={index} style={{height: style(post._id) }}>
          <img className='mlibPic' src={post.image}></img>
          <p className="mlibName"><b>{post.name}</b></p>
          <p className='mlibAuthor'>{post.author}</p>
          <p className='mlibGC'>Genre: <b>{post.genre.name}</b></p>
          <p className='mlibGC'>Created on: <b>{dateFormat(post.createOn, "dd.mm.yyyy")}</b>  Updated on: <b>{dateFormat(post.lastUpdatedOn, "dd.mm.yyyy")}</b></p>
          <button className='mlibButton' onClick={(e) => navigate(`/library/${post._id}`, { replace: true })}><FontAwesomeIcon icon={faPlay}/></button>
        </div>
      ))
    } else {
      return data.filter(post => {
        if (query === '') {
          return post;
        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => (
        <div className="libKniga" key={index}>
          <div className='libPic' style={{background: `transparent url(${post.image}) center center/cover no-repeat padding-box`}}/>
          <p className="libName"><b>{post.name}</b></p>
          <p className='libAuthor'>{post.author}</p>
          <p className='libGC'>Genre: <b>{post.genre.name}</b></p>
          <p className='libGC'>Created on: <b>{dateFormat(post.createOn, "dd.mm.yyyy")}</b>  Updated on: <b>{dateFormat(post.lastUpdatedOn, "dd.mm.yyyy")}</b></p>
          <button className='libB' onClick={ (e) => {
            navigate(`/library/${post._id}`, { replace: true })
          } }><FontAwesomeIcon icon={faPlay}/></button>
        </div>
      ))
    }
  }
}

const Library = () => {
  const [query, setQuery] = useState("")
  const [data, setLibData] = useState([])

  let navigate = useNavigate()

  var gData = {
    data: data,
    query: query
  }

  useEffect( () => {
    
    let usr = JSON.parse(localStorage.getItem('user'))
    if (!usr) {
      navigate("/", { replace: true })
    }

    const fetchData = async () => {
      const cData = await initLibrary()
      setLibData(cData)
      gData.data = data
    }
    
    fetchData()
    .catch(console.error);


  }, [])
  

  const handleQuery = (e) => {
    setQuery(e.target.value)
    gData.query = query
  };
  
  return (
    <div className='libMain'>
      <NavBar isMobile={isMobile}/>
      <div className={
        isMobile ? "mlibBooks" : "libBooks"
      }>
        <div className='libHeading'>
          <h1 className={
            isMobile ? "mlibAll" : 'libAll'
          }>ALL BOOKS</h1>
          <input placeholder='Search Books' value={query} onChange={handleQuery} className={
            isMobile ? "mlibSearch" : "libSearch" 
          }/>
        </div>
        <LibDiv data={data} query={query}/>
      </div>
    </div>
  )
}

export {
  Library,
  NavBar
}