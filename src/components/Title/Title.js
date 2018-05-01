import React from 'react';
import './Title.css';

const Header = props => (
	<h2 className = "title">{props.children}</h2>
);

export default Title;