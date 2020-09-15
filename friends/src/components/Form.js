import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth' 

const initialValue = {
    
        id: '',
        name: '',
        age: '',
        email: ''
      
}


function Form(props){
    const [newFriend, setNewFriend] = useState(initialValue)
    const history = useHistory()

    const changeHandler = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setNewFriend({
            ...newFriend,
            id: Date.now(),
            
        })
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then((res)=>{
            console.log(res)
            // localStorage.setItem('token', res.data.payload)
            history.push('/friendsList')
        })
        .catch((err)=>{
            console.log("error", err)
        })
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Add Friend</h2>
                <label> <div>name </div>
                    <input 
                      name= 'name'
                      type = 'text'
                      value = {newFriend.name}
                      onChange = {changeHandler}
                      />
                </label>
                <label> <div>age</div> 
                    <input 
                      name= 'age'
                      type = 'text'
                      value = {newFriend.age}
                      onChange = {changeHandler}
                      />
                </label>
                <label> <div>e-mail</div> 
                    <input 
                      name= 'email'
                      type = 'text'
                      value = {newFriend.email}
                      onChange = {changeHandler}
                      />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form