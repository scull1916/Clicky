import React from 'react';
import './gameboard.css';

const Gameboard = props => (
	<div onClick = {() => props.setClicked(props.id)} className = "gamepiece">
		<div className = "img-container">
			<img alt = {props.name} src = {props.image} />
		</div>
	</div>
);

export default Gameboard;