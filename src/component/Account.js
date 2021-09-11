import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { startUsersAccount } from '../Actions/usersAction'

const Account = (props) => {

    const dispatch = useDispatch()
    const [user, setUser] = useState({})

    useEffect(() => {


        dispatch(startUsersAccount(setUser))
    
    
    },[])

    return (

        <div class = "card"  >
             <div class="card-body">
             <h2 class="card-title">Account Details</h2>
             <p class="card-text">Email - {user.email}</p>
             <p class="card-text">Username - {user.username}</p>
                {/* <p>Email - {user.email}</p>
                <p>Username - {user.username}</p> */}
             </div>
            
        </div>
    )
}
export default Account