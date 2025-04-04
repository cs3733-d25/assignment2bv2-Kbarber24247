import React from 'react';
import './App.css';

const List2: React.FC = () => {
    return (
        <div>
            <h3 className="list">My Top 5 Favorite Motorcycles</h3><br/>
            <ol className="list">
            <li>Kawasaki Ninja H2R</li>
            <li>Yamaha YZF-R1M</li>
            <li>Ducati Panigale V4</li>
            <li>BMW S 1000 RR</li>
            <li>Suzuki GSX-R 1000 R</li></ol>

        </div>
    );
};
export default List2;