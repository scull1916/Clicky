import React from 'react';
import './Title.css';

const Title = props => (
	<div className = "row fixed-top">
		<div className = "header">
			<h2 className = "title">{props.children}</h2>
		</div>
	</div>
);

export default Title;