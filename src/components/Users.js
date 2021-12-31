import React, {useEffect, useState} from 'react'
import axios from 'axios'


 function Users(props) {

 const [users, setUser] = useState([])
    useEffect(() =>{
    
        async function getUsers(){
           const result =  await axios('https://jsonplaceholder.typicode.com/users')
           setUser(result.data)

        }
        getUsers()
      });

    return (
     <div>
         {users.map(user => <li key={user.id}>{user.name}</li>)}
     </div>
    )
}
export default Users;

