import './App.css'
import Intro from "./intro.tsx";
import Hobby1 from "./hobby1.tsx";
import Form1 from "./form1.tsx";

function App() {

  return (
    <>
        <Intro name1={"Keith"} name2={"Max"} />
        <hr/>
        <Hobby1/>
        <Form1/>
        <hr/>
    </>
  )
}

export default App
