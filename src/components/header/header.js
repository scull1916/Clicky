import React from 'react';
import './header.css';

const header = props => (
	<div className = "row header">
		<h2 className = "col-sm text-center header-text">Game text</h2>
		<h2 className = "col-sm text-center header-text">Click an image to begin</h2>
		<h2 className = "col-sm text-center header-text>Score: {props.score} | High Score: {props.totalScore}"</h2>
);

export default header;