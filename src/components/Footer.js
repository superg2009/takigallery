import React from 'react';
import Emoji from './Emoji';
function Footer (props){
    return(
        <div> 
         &copy; {new Date().getFullYear()} Grant Marshall <br></br>
        <a href='https://www.github.com/superg2009'>Github</a>
        <p> for the glory of Hands <Emoji label='Hand' symbol="👋" aria-hidden = {true}></Emoji></p>
        <p>Made with React, React Bootstrap, Memes and <Emoji label='Heart' symbol='❤️' aria-hidden = {true}></Emoji></p>
        </div>
    );
    
}

export default Footer;
