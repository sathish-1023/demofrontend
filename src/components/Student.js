import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     // width: '25ch',
    },
  },
}));

export default function Student() {
  //insert into database
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
  const classes = useStyles();
  const handleClick=(e)=>{
    e.preventDefault();
    const student={name,address};
    console.log(student);
    fetch("http://localhost:8080/student/add",{
        method:"POST",
       headers:{"Content-type":"application/json"},
       body:JSON.stringify(student)
    }).then(()=>{
        console.log(" New Student is Added");
        
    })     
  }
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
    <Paper elevation={3} style={PaperStyle}>
        <h1 style={{color:'blue'}}><u>Add Student</u> </h1>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>

        <Button variant="contained" color="secondary" onClick={handleClick}>
        Submit
        </Button>
        <br/>
      {name}<br/>
      {address}
    </form>
    </Paper>
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
