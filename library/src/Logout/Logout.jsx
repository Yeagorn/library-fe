import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"

const Logout = () => {
    
    let navigate = useNavigate()
    
    useEffect(() => {
      
        logoutFunc()

    }, [])
    

    const logoutFunc = () => {
        var user = JSON.parse(localStorage.getItem("user"))
        if (user && user.token) {
            localStorage.removeItem('user')
            navigate('/', { replace : true })
        } else {
            return navigate('/', {replace:true})
        }
    }

    return (
    <div>{
        logoutFunc()
    }</div>
  )
}
export default Logout