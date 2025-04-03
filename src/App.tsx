
import './App.css';

import Intro from "./intro.tsx";
import Hobby1 from "./hobby1.tsx";
import Form1 from "./form1.tsx";
import Title from "./title.tsx";
import Table2 from "./table2.tsx";
import List2 from "./list2.tsx";
import Form2 from "./form2.tsx";
import Hobby2 from "./hobby2.tsx";

function App() {

    return (
        <>

            <div>

            </div>
            <Title/>
            <Intro name1={"Keith"} name2={"Max"} />
            <hr />
            <Hobby1 />
            <Form1 />
            <Hobby2/>
            <List2/>
            <Table2/>
            <Form2/>

            <hr />
        </>
    );
}

export default App;
