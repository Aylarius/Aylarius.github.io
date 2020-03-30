import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/fontawesome-free-brands";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    render() {
        return (
            <div className='border-0 text-white d-inline-block float-right mr-0 ml-auto'>
                <ListGroup horizontal className="social">
                    <ListGroup.Item>
                        <a href="http://github.com/Aylarius" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='lg'></FontAwesomeIcon>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="http://fr.linkedin.com/in/thifainenoirault" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size='lg'></FontAwesomeIcon>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="http://twitter.com/aylarius" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size='lg'></FontAwesomeIcon>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="mailto:thifaine.noirault@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size='lg'></FontAwesomeIcon>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default Contact;
