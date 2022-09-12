import { useState } from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const SKILLS = [
  "Html5",
  "Css3",
  "JavaScript",
  "ES6",
  "React.js",
  "Tailwindcss",
  "Bootstrap5",
  "Sass",
  "Git & Github"
];

function App() {
  let [age, setAge] = useState();

  setAge = function () {
    const now = new Date().getFullYear();
    age = now - 2000;
    return age;
  };

  const info = {
    firstName: "Jam",
    lastName: "Hejrati",
    age: setAge(),
    address: "Tehran, Karaj",
    language: "Persian, English",
    openToWork: true,
  };

  return (
    <div className="bg-gray-800">
      <MenuBar />
      <Header />
      <PersonalInfo info={info} />
      <Skills skillInfo={SKILLS} />
      <Footer />
    </div>
  );
}

export default App;
