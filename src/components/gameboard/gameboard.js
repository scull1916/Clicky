import React from 'react';
import './Gameboard.css';

const Gameboard = props => (
	<div onClick={() => props.click(props.id)} className = "card">
		<div className = "img-container">
			<img alt={props.name} src={props.image} />
		</div>
	</div>
);

export default Gameboard;