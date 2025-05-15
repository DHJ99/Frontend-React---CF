import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted , setSbmitted ] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers =() =>{
        Axios.get('http://localhost:3001/api/users')
        .then( response => {
            setUsers(response?.data?.response);           
        })
        .catch(error => {
            console.error("Axio Error :" , error);
        });
    }

    const addUsers = (data) =>{
        setSbmitted (true);
        const payload ={
            id:data.id,
            name:data.name
        }
        Axios.post('http://localhost:3001/api/createusers' , payload)
            .then(() => {
                getUsers();    
                setSbmitted(false);      
            })
            .catch(error => {
                console.error("Axio Error :" , error);
            });
    }


   return (
     <Box sx={{
        width : 'calc(100% - 100px)',
        margin : 'auto',
        marginTop:'100px'
     }}>
        <UserForm
            addUsers={addUsers}
        />
        <UserTable rows={users}/>
     </Box>  
    );
}

export default Users;