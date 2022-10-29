import Display from "./files/Display";
import Form from "./files/Form";
import { useState } from "react";


function App() {
  let [name , setName] = useState("Name") ;
  let [email , setEmail] = useState("email@e.com") ;
  let [phone , setPhone] = useState("9898989898") ;
  let [theme , setTheme] = useState("light") ;


  return (
    <div >
     <h1>App.JS</h1>
      <Form 
      name={name} email={email} phone = {phone} theme={theme}
      hname = {setName}
      hemail = {setEmail}
      hphone = {setPhone}
      htheme = {setTheme}
      />
      <Display name={name} email={email} phone = {phone} theme={theme} />

    </div>
  );
}

export default App;
