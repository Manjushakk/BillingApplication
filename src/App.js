import React, {useState, useEffect} from 'react'



import NavBar from './component/Navbar'


 const App = (props) => {

  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {

    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {

    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])


  return (

    <div className = "container">
      
      <NavBar userLoggedIn = {userLoggedIn} handleAuth = {handleAuth} />
      

    </div>
  )
 }

 export default App