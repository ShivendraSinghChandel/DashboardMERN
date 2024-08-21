import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";

const EditData=()=>{
    const {id}=useParams();

    const [mydata,setMydata]=useState({});

    const loadData=()=>{
        let api="http://localhost:9000/students/editdisplay";
        axios.post(api,{id:id}).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[]);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata((values)=>({...values,[name]:value}))
    }
    
    const handleSubmit=()=>{
        let api="http://localhost:9000/students/editsave";
        axios.post(api,mydata).then((res)=>{
            message.success("record updated",3);
        })
    }


    return(
        <>
           Enter Roll no: <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} /> <br /> <br />
           Enter Name: <input type="text"  name="name" value={mydata.name} onChange={handleInput} /> <br /> <br />
           Enter City: <input type="text"  name="city" value={mydata.city} onChange={handleInput} /> <br /> <br />
           Enter Fees: <input type="text" name="fees" value={mydata.fees} onChange={handleInput} /> <br /> <br />
           <button onClick={handleSubmit}>Update</button>
        </>
    )
}


export default EditData;