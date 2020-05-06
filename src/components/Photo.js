import React from 'react';
import Image from 'react-bootstrap/Image';

function Photo(props){
    const styles = {
        height: "45vmin",
        padding: "0.15em"
    };

    return(
        <Image fluid='true' key={props.key} src ={props.src} style= {styles} alt= {props.description} title={props.title} ></Image>
    );
}

export default Photo;