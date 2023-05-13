import React, { useEffect, useState } from 'react';
import {Container, Paper} from '@material-ui/core';


export default function Read() {
  
//use to get all list elements.
const[students,setStudents]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudents(result);
    })
  },[])
  //use to update value

  const PaperStyle={padding:'50px 20px',width:'600px',margin:"20px auto" }
  return (
 

    
    <Container>
   <h1>Students</h1>
    <Paper elevation={3} style={PaperStyle}>
        {students.map(student=>(
         <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
            Id : {student.id}<br/>
            Name : {student.name}<br/>
            Address : {student.address}
        </Paper>  
        ))}
    </Paper>
    </Container>
  );
}
