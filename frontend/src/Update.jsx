import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import editimg from "./image/edit.png";
import deleteimg from "./image/delete.png";
import axios from "axios";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


const Update=()=>{
    const [mydata,setMydata]=useState([]);

    const navigate=useNavigate();

    const loadData=()=>{
        let api="http://localhost:9000/students/updatedisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[]);
     
     const myDel=(myid)=>{
        let api="http://localhost:9000/students/updatedatadelete";
        axios.post(api,{myid:myid}).then((res)=>{
            toast("Data deleted")
            loadData();
        })
     }

     const myEdit=(myid)=>{
     
       navigate(`/editdata/${myid}`)
     }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                    <a href="#" onClick={()=>{myEdit(key._id)}}>
                   <img src={editimg} alt="" width="30px" height="30px" />
                   </a>
                   <a href="#" onClick={()=>{myDel(key._id)}}>
                   <img src={deleteimg} alt="" width="30px" height="30px" />
                   </a>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <ToastContainer/>
           <h1>This is Update page</h1>
           <Table>
            <thead>
                <tr>
                    <th>Roll no</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
           </Table>

        </>
    )
}


export default Update;