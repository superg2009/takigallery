import React from 'react';
import Image from 'react-bootstrap/Image';

function Gallery(props){
const styles = {
        height: "55vmin",
        padding: "0.15em"
    };
const images = props.src;
    return (
         images.map(({id, src, title, description}) => <Image fluid='true' key={id} src={src} title={title} alt={description} style={styles}></Image>)
    );
        
}

export default Gallery;