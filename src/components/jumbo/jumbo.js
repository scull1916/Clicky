import React from 'react';
import './jumbo.css';

const Jumbo = props => (
    <div className = "row">
        <div className = "jumbotron jumbo">  
            <h1 className = "text-center">How to play:</h1>
            <h3 className = "text-center">Click on an image to begin. If you click the same image more than once, your score will reset to zero and you will restart the game.</h3>
        </div>
    </div>
);

export default Jumbo;