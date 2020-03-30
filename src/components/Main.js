import React, {Component, createRef} from 'react';
import {Card} from "react-bootstrap";
import Typed from 'react-typed';
import {data} from "../data";

class Main extends Component {
    state = {
        data: data.fr
    }
    typed = createRef();
    render() {
        return (
            <div className='mt-3 align-items-center m-auto col col-sm-12 col-md-8'>
                <div style={{
                    backgroundColor: 'rgba(40, 40, 40, 0.4)',
                    padding: '6rem',
                    clipPath: 'polygon(89% 17%, 100% 33%, 67% 78%, 48% 100%, 33% 76%, 0% 25%)'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(10, 10, 10, 0.7)',
                        clipPath: 'polygon(0% 42px, 100% 2px, 73% 98%, 11% 63%)'
                    }}>
                        <Card className='m-auto text-center border-0 text-white'
                              style={{
                                  backgroundColor: 'rgba(10, 10, 10, 0.4)',
                                  padding: '6rem',
                                  borderRadius: '0',
                                  clipPath: 'polygon(27% 32px, 100% 36%, 35% 109%, 26px 34%)'
                              }}>
                            <Card.Body>
                                <h1 className='b612'>
                                    <span className='font-italic' style={{fontSize: '2rem',}}>
                                        {this.state.data.greetings}
                                    </span>
                                    <br/>
                                    <span className='font-weight-bold'>
                                        {this.state.data.presentation}<span style={{ color: '#fef9d7'}}>Thifaine</span>
                                    </span>
                                </h1>
                                <Typed
                                    typedRef={(typed) => { this.typed = typed; }}
                                    strings={this.state.data.typed_content}
                                    typeSpeed={50}
                                    backSpeed={60}
                                    loop
                                    smartBackspace
                                    style={{
                                        fontSize: '1.25rem',
                                        paddingTop: '0.75rem'
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
