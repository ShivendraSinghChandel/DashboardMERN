import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const userName=localStorage.getItem("username")

const Dashboard=()=>{
    const myNav=useNavigate();

    const userAuth=()=>{
        if(!userName)
        {
            myNav("/login");
        }
    }

    useEffect(()=>{
        userAuth();
    },[]);

    const logout=()=>{
        localStorage.clear();
        myNav("/login");
    }
    return(
        <>
          <h1>Welcome User : {userName}</h1>
          <button onClick={logout}>Log out</button>
        </>
    )
}


export default Dashboard;