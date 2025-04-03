

function Form1(){
    return(
        <div>
            <form>
                <label htmlFor="fullname">Enter your name: </label>
                <input type="text" id="fullname"/>
                <br/>
                <label htmlFor="email">Enter your email:</label>
                <input type="text" id="email"/>
                <br/>
                <p>
                    Options:
                </p>
                <input type="checkbox" id="htseats"/>
                <label htmlFor="htseats">Heated seats </label>

                <input type="checkbox" id="quattro"/>
                <label htmlFor="quattro">AWD </label>

                <input type="checkbox" id="pwseats"/>
                <label htmlFor="pwseats">Power seats </label>

                <input type="checkbox" id="din"/>
                <label htmlFor="din">Radio</label>

                <br/>
                <p>
                    Color:
                </p>
                <input type="radio" id="blue" name="radio"/>
                <label htmlFor="blue">Crystal Blue Metallic </label>

                <input type="radio" id="red" name="radio"/>
                <label htmlFor="red">Brilliant Red </label>

                <input type="radio" id="silver" name="radio"/>
                <label htmlFor="silver">Brilliant Silver </label>

                <br/>
                <br/>


                <textarea id="textarea1" ></textarea>

                <br/>
                <label htmlFor="textarea1">Any other questions? </label>

                <br/>
                <br/>

                <label htmlFor="engine">Engine Option</label>
                <select id="engine">
                    <option value="1.8t">1.8T</option>
                    <option value="3.0l">3.0L V6</option>
                    <option value="4.2l">4.2L V8</option>
                    <option value="1.9l">1.9L T Diesel</option>
                </select>
                <br/>
                <br/>
                <button type="submit">Submit</button>
                <br/>
            </form>
            <hr/>
        </div>
    )
}

export default Form1