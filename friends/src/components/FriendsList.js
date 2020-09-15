import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function FriendsList(props){
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('/api/friends')
        .then((res)=>{
            setFriends(res.data)
        })
        .catch((err)=>{
            console.log("error get", err)
        })
    }, [])
    return (
         <div>
             <h2>
             Private friends list
             </h2>
             {
                 friends.map((friend)=>{
                     return (
                     <div>
                         <p>{friend.name}</p>
                         <p>{friend.age}</p>
                         <p>{friend.email}</p>
                     </div>
                     )
                 })
             }

         </div>
    )
}

export default FriendsList