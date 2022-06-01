import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

  //state for user inputs
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [country,setCountry] = useState("");
  const [position,setPosition] = useState("");
  const [wage,setWage] = useState(0);

  //function to add employee to the database
  const addEmployee = (event)=> {

    event.preventDefault();
    //Use axios library to post employee object to database
    Axios.post("localhost:3000/create", {
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage 
    })
    .then(()=> {
      console.log('Success');
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

  return (
    <div className="App">
     <form className="formStyle">
      <label>Name:</label>
      <input type="text" onChange={(event) => {setName(event.target.value)}} />
      <label>Age:</label> 
      <input type="number" onChange={(event) => {setAge(event.target.value)}} />
      <label>Country:</label> 
      <input type="text" onChange={(event) => {setCountry(event.target.value)}} />
      <label>Position:</label> 
      <input type="text" onChange={(event) => {setPosition(event.target.value)}} />
      <label>Salary:</label> 
      <input type="number" onChange={(event) => {setWage(event.target.value)}}/>
      <button onClick={addEmployee}>Submit</button>
     </form>
    </div>
  );
};

export default App;
