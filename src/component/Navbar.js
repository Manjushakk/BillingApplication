import React from 'react'
import {Link, Route, withRouter, NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import ShowBill from './ListBilling/ShowBill'
import CustomersContainer from './Customer/CustomersContainer'
import ProductsContainer from './Products/ProductsContainer'
import CartContainer from './Billing/CartContainer'
import BillingContainer from './ListBilling/BillingContainer'


const NavBar = (props) => {                                                                             

    const {userLoggedIn,handleAuth} = props
    
    return (
          
            //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
            //   <div class="container-fluid">
            //   <h1><Link to = "/" class="navbar-brand" > Billing Application </Link></h1>
            //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //       <span class="navbar-toggler-icon"></span>
            //     </button>
            //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
            //       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    
            //                   <li class="nav-item" ><Link class="nav-link active" to = "/"> Home </Link><br/></li>
            //                   {userLoggedIn ? 
            //                   <>
            //                       <li class="nav-item" ><Link to = "./account" class="nav-link active" > Account </Link></li>
            //                       <li class="nav-item" ><Link to ="./customers" class="nav-link active" >Customers</Link></li>
            //                       <li class="nav-item" ><Link to ="./products" class="nav-link active" >Products</Link></li>
            //                       <li class="nav-item" ><Link to ="./cartItems" class="nav-link active" >AddtoCart</Link></li>
            //                       <li class="nav-item" ><Link to ="./billing" class="nav-link active" >Billing</Link></li>
            //                       <li class="nav-item" ><Link to =""  class="nav-link active" onClick = {()=> {
            //                         localStorage.removeItem('token')

            //                         // const confirm = window.confirm
            //                         // alert('Successfully logged out')
            //                         handleAuth()
            //                         props.history.push('/')
            //                       }}> Logout </Link></li>
            //                   </>:
            //                   <>
            //                     <li class="nav-item" ><Link to = "/register" class="nav-link active"> New Registration </Link></li>
            //                     <li class="nav-item" ><Link to = "/login" class="nav-link active"> Login </Link></li>
                                
            //                 </>
                            
            //                   }
                          

            //        </ul>

            //           <Route path = "/" component = {Home} exact = {true}/>
            //           <Route path = "/register" component = {Register}/>
            //           <Route path = "/login" render = {(props) => {

            //             return <Login
                        
            //                 {...props}

            //                 handleAuth = {handleAuth}
            //             />
            //           }}/>
            //           <Route path = "/account" component = {Account} />
            //           <Route path = "/customers" component ={CustomersContainer} />
            //           <Route path = "/products" component ={ProductsContainer} />
            //           <Route path = "/cartItems" component ={CartContainer} />
            //           <Route path = "/billing" component ={BillingContainer} />
            //   </div>
            //   </div>
            // </nav>
    <div>

    <Navbar bg = "dark" expand = "lg">
    <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
    <Navbar.Collapse id = "basic-navbar-nav" />
    <Nav>
    
        

     
          <ul class = "navbar-nav">
            <NavLink to = "/" className = "d-inline p-2 bg-dark text-white"> Home </NavLink><br/>
            {userLoggedIn ? 
            <>
                <NavLink to = "./account" className = "d-inline p-2 bg-dark text-white" >   Account </NavLink>
                <NavLink to ="./customers" className = "d-inline p-2 bg-dark text-white" >Customers</NavLink>
                <NavLink to ="./products" className = "d-inline p-2 bg-dark text-white" >Products</NavLink>
                <NavLink to ="./cartItems" className = "d-inline p-2 bg-dark text-white" >AddtoCart</NavLink>
                <NavLink to ="./billing" className = "d-inline p-2 bg-dark text-white" >Billing</NavLink>
                <NavLink to ="" className = "d-inline p-2 bg-dark text-white" onClick = {()=> {
                  localStorage.removeItem('token')

                  // const confirm = window.confirm
                  // alert('Successfully logged out')
                  handleAuth()
                  props.history.push('/')
                }}> Logout </NavLink>
            </>:
            <>
              <NavLink to = "/register" className = "d-inline p-2 bg-dark text-white" > New Registration </NavLink>
              <NavLink to = "/login" className = "d-inline p-2 bg-dark text-white" > Login </NavLink>
              
          </>
          
            }
          </ul>
          </Nav>
          </Navbar >
            
        <Route path = "/" component = {Home} exact = {true}/>
        <Route path = "/register" component = {Register} />
        <Route path = "/login" render = {(props) => {

          return <Login
          
              {...props}

              handleAuth = {handleAuth}
          />
        }}/>
        
     
        <Route path = "/account" component = {Account} exact = {true} />
        <Route path = "/customers" component ={CustomersContainer} />
        <Route path = "/products" component ={ProductsContainer} />
        <Route path = "/cartItems" component ={CartContainer} />
        <Route path = "/billing" component ={BillingContainer} exact = {true}/>
        <Route path = "/billing/:_id" component ={ShowBill} />
      </div>


    
    
    )
}

export default withRouter(NavBar)


