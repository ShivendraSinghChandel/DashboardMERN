import axios from "axios";
import { useEffect, useState } from "react";
import StuDesign from "./StuDesign";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const [mydata,setMydata]=useState([]);

    const loadData=async(req,res)=>{
        let url="http://localhost:9000/students/studisplay";
        let response=await axios.get(url);
        
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[]);

    const ans=mydata.map((key)=><StuDesign
    rno={key.rollno}
    nm={key.name}
    ct={key.city}
    fs={key.fees}
    />)
    return(
        <>
        <Table>
          <thead>
        <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>
        </>
    )
}


export default Display;