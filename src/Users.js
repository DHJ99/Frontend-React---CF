import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const users = [
    {
        id:1,
        name: 'Amal'

    },
    {
        id:2,
        name: 'Bimal'

    },
    {
        id:3,
        name: 'Kamal'

    }
]

const Users = () => {
   return (
     <Box>
        <UserForm/>
        <UserTable rows={users}/>
     </Box>  
    );
}

export default Users;