import React from 'react';
import './Title.css';

const Title = props => (
	<div className = "row fixed-top">
		<div className = "header">
			<span className = "title">{props.children}</span>
		</div>
	</div>
);

export default Title;