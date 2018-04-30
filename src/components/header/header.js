import React from 'react';
import './header.css';

const Header = props => (
	<h2 className = "header">{props.children}</h2>;
);

export default Header;