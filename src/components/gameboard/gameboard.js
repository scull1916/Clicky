import React from 'react';
import './Gameboard.css';

const Gameboard = props => (
	<div id={props.id} onClick={props.imageClick} className = "card">
		<div className = "img-container">
			<img alt={props.name} src={props.image} />
		</div>
	</div>
);

export default Gameboard;