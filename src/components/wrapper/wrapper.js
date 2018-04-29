import React from 'react';
import './wrapper.css';

const wrap = props => (
<div className = "container-fluid wrapper">{props.children}</div>
);

export default wrap;