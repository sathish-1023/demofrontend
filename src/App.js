
import './App.css';
import React from 'react';
import Appbar from './components/Appbar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Student from './components/Student';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
function App() {
  const [alignment, setAlignment] = React.useState('create');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    
  };

  return (
    <div className="App">
  <Appbar/>
  
  <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="create">Create</ToggleButton>
      <ToggleButton value="read">Read</ToggleButton>
      <ToggleButton value="Update">Update</ToggleButton>
      <ToggleButton value="Delete">Delete</ToggleButton>

    </ToggleButtonGroup>
    {(alignment==='create'?<Student/>:<></>)};
    {(alignment==='read'?<Read/>:<></>)};
    {(alignment==='Update'?<Update/>:<></>)};
    {(alignment==='Delete'?<Delete/>:<></>)};
  
   </div>
  );
}

export default App;
