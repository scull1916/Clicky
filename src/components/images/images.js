import React from 'react';
import './images.css';

const image = props => (
    <div className = "img-thumbnail imgWrapper">
        <img onClick = {() => props.sortImages(props.id, props.clicked)} id = {props.id} src = {props.src}
        className = "img-fluid imgSize gridEle" alt = "placeholder" data-clicked = {props.clicked} />
    </div>
);

export default image;