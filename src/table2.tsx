import React from 'react';
import './App.css';

const Table2: React.FC = () => {
    return (
        <div className="Table2">
            <h3 className="Table2"></h3>
            <hr/>
            <table className="collapse">
                <caption>Favorite Motorcycle Top Speeds:</caption>
                <tr>
                    <th>Name</th>
                    <th>Engine Type</th>
                    <th>Top Speed</th>
                </tr>

                <tr>
                    <th>Kawasaki Ninja H2R</th>
                    <th>998cc inline-4 engine</th>
                    <th>207MPH</th>
                </tr>

                <tr>
                    <th>Yamaha YZF-R1M</th>
                    <th>998cc inline-4 engine</th>
                    <th>186MPH</th>
                </tr>

                <tr>
                    <th>Ducati Panigale V4</th>
                    <th>1,103cc V4 engine</th>
                    <th>198MPH</th>
                </tr>

                <tr>
                    <th>BMW S 1000 RR</th>
                    <th>999cc inline-4 engine</th>
                    <th>188MPH</th>
                </tr>

                <tr>
                    <th>Suzuki GSX-R 1000 R</th>
                    <th>999.8cc inline-4 engine</th>
                    <th>189MPH</th>
                </tr>
            </table>
            <hr/>
        </div>
    );
};
export default Table2;