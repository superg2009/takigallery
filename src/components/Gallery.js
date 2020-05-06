import React from 'react';
import Photo from './Photo';

function Gallery(props){
const images = props.src;
    return (
         images.map(({id, src, title, description}) => <Photo key={id} src={src} title={title} alt={description}></Photo>)
    );
        
}

export default Gallery;