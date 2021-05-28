import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Header(props){

    return(
        <Jumbotron fluid>
            <Container variant='light' bg='light'>
                <h1> The Glorious Greek Panagiotis </h1>
                <h2>Your goto for all your Greek needs</h2>
            </Container>
        </Jumbotron>
    );
}

export default Header;