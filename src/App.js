import React from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import Main from "./components/Main";
import Contact from "./components/Contact";
import {data} from './data';

class App extends React.Component {
    state = {
        data: data.fr
    }

    render() {
        return (
            <div className='h-100'
                 style={{
                     background: 'linear-gradient(180deg, rgba(210,153,194,1) 0%, rgba(254,249,215,1) 40%, rgba(254,249,215,1) 60%, rgba(222,231,211,1) 72%, rgba(166,201,205,1) 82%, rgba(41,121,158,1) 100%)'
                 }}>
                <Navbar bg="transparent" className='fixed-top'>
                    <Navbar.Brand>
                        <img
                            alt="Thifaine Noirault"
                            src="/tn.svg"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Contact></Contact>
                </Navbar>
                <Container className="d-flex h-100" fluid>
                    <Main></Main>
                </Container>
            </div>
        );
    }
}

export default App;