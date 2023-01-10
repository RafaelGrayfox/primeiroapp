import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function Profile (){
    const {login} = useContext(UserContext)

    return (
        <div>
            {login? 'Dados do Usuário' : 'Faça login para ter acesso às informações!'}
            
        </div>
    )
}
export default Profile;