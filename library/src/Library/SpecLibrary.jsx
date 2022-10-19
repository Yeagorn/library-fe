import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getBook } from "../API/API"
import profile from "../assets/img/profile.svg"
import logo from "../assets/img/Exclusion 1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import dateFormat from 'dateformat'
import {isMobile} from 'react-device-detect'
import {NavBar} from './Library';


function BookComponent(props) {
  const [bok, setBok] = useState();
  const isMobile = props.isMobile;

  useEffect(() => {
    getBook(props.id).then(setBok);
  }, [props.id])

  if (typeof bok !== 'object')
    return null;
  if (isMobile) {
    return (
      <div className="libBookMain">
        <a class='mlibReturn' href="/library"><FontAwesomeIcon icon={faCaretLeft} size="xl"/> Library</a>
        <div className="mlibBookImage"></div>
        <div className="mlibBookInfo">
          <div className="mlibBookTitle">
            <h1>{bok.name}</h1>
          </div>
          <div className="libBookText">
            <h1 className="libBookAuthor">{bok.author}</h1>
            <h1 className="libBookGenre">Genre: <b>{bok.genre.name}</b></h1>
            <h1 className="libBookCU">Created on: <b>{dateFormat(bok.createOn, "dd.mm.yyyy")}</b></h1>
            <h1 className="libBookCU">Updated on: <b>{dateFormat(bok.lastUpdateOn, "dd.mm.yyyy")}</b></h1>
          </div>
          <div className="libBookShort">
            <h1>Short description</h1>
            <div className="libBookDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi urna, rhoncus at odio eget, auctor fringilla nisl. Integer non congue ante, a pretium justo. Nunc bibendum eu justo eget scelerisque. </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="libBookMain">
        <div className="libBookImage"></div>
        <div className="libBookInfo">
          <div className="libBookTitle">
            <h1>{bok.name}</h1>
          </div>
          <div className="libBookText">
            <h1 className="libBookAuthor">{bok.author}</h1>
            <h1 className="libBookGenre">Genre: <b>{bok.genre.name}</b></h1>
            <h1 className="libBookCU">Created on: <b>{dateFormat(bok.createOn, "dd.mm.yyyy")}</b></h1>
            <h1 className="libBookCU">Updated on: <b>{dateFormat(bok.lastUpdateOn, "dd.mm.yyyy")}</b></h1>
          </div>
          <div className="libBookShort">
            <h1>Short description</h1>
            <div className="libBookDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi urna, rhoncus at odio eget, auctor fringilla nisl. Integer non congue ante, a pretium justo. Nunc bibendum eu justo eget scelerisque. </div>
          </div>
        </div>
      </div>
    )
  }
}

const SpecLibrary = () => {
    const { bookid } = useParams()
    const [book, setBook] = useState([])

    useEffect(async () => {
        
        const onI = async () => {
            const bData = await getBook(bookid)
            setBook(bData)
        }

        onI()
            .catch(console.error);
    }, [bookid])
  return (
      <div>
        <NavBar isMobile={isMobile} library={true}/>
        <BookComponent data={book} isMobile={isMobile} id={bookid}/>
      </div>
  )
}
export default SpecLibrary