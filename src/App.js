import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";

function App() {
  const info ={
    firstName: 'Jam',
    lastName:'Hejrati',
    age: 22,
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
