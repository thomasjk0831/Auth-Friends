import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const userLogin = {
    username : '',
    password : ''
}


function Login(props){
    const [input, setInput] = useState(userLogin)
    const history = useHistory()

    const changeHandler = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', input)
        .then((res)=>{
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            history.push('/friendsList')
        })
        .catch((err)=>{
            console.log("error", err)
        })
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Log-in(creds in readme)</h2>
                <label> <div>username</div>
                    <input 
                      name= 'username'
                      type = 'text'
                      value = {input.username}
                      onChange = {changeHandler}
                      />
                </label>
                <label> <div>password</div>
                    <input 
                      name= 'password'
                      type = 'text'
                      value = {input.password}
                      onChange = {changeHandler}
                      />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login