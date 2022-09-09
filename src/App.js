import { useState } from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";

function App() {
  let [age , setAge] = useState()
  
  setAge = function() {
    const now = new Date().getFullYear()
    age = now - 2000
    return age
  }

  const info ={
    firstName: 'Jam',
    lastName:'Hejrati',
    age: setAge(),
    address: 'Tehran, Karaj',
    language: 'Persian, English',
    openToWork: true,
  }



  return (
    <div className="bg-gray-800">
      <MenuBar />
      <Header />
      <PersonalInfo info ={info} />
    </div>
  );
}

export default App;
