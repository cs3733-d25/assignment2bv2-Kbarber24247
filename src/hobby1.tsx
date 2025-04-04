
import List1 from "./list1.tsx"
import Table1 from "./table1.tsx";
import carPic from "./assets/pagani.jpeg"

function Hobby1(){
    return (
        <div>
            <h2>My name is Max and my favorite hobby is cars.</h2>
            <br/>
            <img src={carPic} alt="Audi B6 Avant" className="picture"/>
            <p>Pagani Huayra at the Top Gear test track.</p>
            <hr/>
            <p>The Audi A4 is also a very cool car and is much more attainable than the Pagani.</p>

            <p>
                5 engine options for the Audi A4 (In no particular order)
            </p>
            <List1/>
            <br/>
            <Table1/>
            <br/>
            <hr/>
            <p>
                Spec your dream 2002-2006 Audi A4
            </p>

        </div>
    )
}

export default Hobby1