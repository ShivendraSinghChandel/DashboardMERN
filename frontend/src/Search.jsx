import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table"

const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [mydata,setMydata]=useState([]);
    const mySearch=()=>{
        let api="http://localhost:9000/students/stusearch";
        axios.post(api,{rollno:rollno}).then((res)=>{
            setMydata(res.data);
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
            </tr>
            </>


        )
    })

    return(
        <>
        <hr size="4" color="red"/>
           <h1>This is Search page</h1>
           Enter Rollno : <input type="text" name="rollno" value={rollno} onChange={(e)=>{setRollno(e.target.value)}} />
           <button onClick={mySearch} >Search</button>
           <hr size="4" color="red"/>
           <Table>
            <thead>
                <tr>
                    <td> Roll no </td>
                    <td> Name </td>
                    <td> City </td>
                    <td> Fees </td>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
           </Table>
        </>
    )
}


export default Search;