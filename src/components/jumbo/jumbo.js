import React from 'react';
import './jumbo.css';

const jumboh = props => (
    <div className = "row">
        <div className = "jumbotron jumbo">
            <h1 className = "text-center">Play this here game</h1>
            <h2 className = "text-center">Click on any image to begin...</h2>
            <h2 className = "text-center">If you click the same image more than once, your score will reset to zero and you restart the game.</h2>
        </div>
    </div>
);

export default jumboh;