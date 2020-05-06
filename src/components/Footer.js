import React from 'react';
import Emoji from './Emoji';
function Footer (props){
    return(
        <div> 
         &copy; 2020 Grant Marshall <br></br>
        <a href='www.grantmarshall.me'>Website</a>
        <p> for the glory of Hands <Emoji label='Hand' symbol="👋" aria-hidden = {true}></Emoji></p>
        <p>Made with React, React Bootstrap, Memes and <Emoji label='Heart' symbol='❤️' aria-hidden = {true}></Emoji></p>
        </div>
    );
    
}

export default Footer;