import React from 'react';
import './App.css';

const Form2: React.FC = () => {
    return (
        <div className="Form2">
            <h3 className="Form2">Design Your Dream Motorcycle:</h3>
            <form>
                <label htmlFor="fullname"> Enter your full name:</label>
                <input type="text" id="fullname"/>
                <br/><br/>
                <label htmlFor="experience"> How Much Experience Do You Have With Motorcycles?</label>
                <input type="text" id="experience"/>
                <br/><br/>

                Dream Accessories:
                <br/>
                <input type="checkbox" id="ABS"/>
                <label htmlFor="ABS"> ABS (Anti-lock Brake System):</label>
                <br/>
                <input type="checkbox" id="heatedGrips"/>
                <label htmlFor="heatedGrips"> Heated Grips:</label>
                <br/>
                <input type="checkbox" id="cruiseControl"/>
                <label htmlFor="cruiseControl"> Cruise Control:</label>
                <br/><br/>

                Preferred Motorcycle Type:
                <br/>
                <input type="radio" id="Sport" name="motorcycleType"/>
                <label htmlFor="Sport">Sport</label>
                <br/>
                <input type="radio" id="Cruiser" name="motorcycleType"/>
                <label htmlFor="Cruiser">Cruiser</label>
                <br/>
                <input type="radio" id="Touring" name="motorcycleType"/>
                <label htmlFor="Touring">Touring</label>
                <br/><br/>

                Engine Power:
                <select id="engine">
                    <option value="400cc">400cc</option>
                    <option value="650cc">650cc</option>
                    <option value="1000cc">1000cc</option>
                </select>
                <br/><br/>

                <label htmlFor="comments">Describe The Look of Your Dream Motorcycle:</label>
                <br/>
                <textarea></textarea>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default Form2;