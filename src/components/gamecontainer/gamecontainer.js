import React from 'react';
import './gamecontainer.css';

const gamecontainer = props => (
	<div className = "gamecontainer">
		<div className = "flexGrid">{props.children}</div>
	</div>
);

export default gamecontainer;