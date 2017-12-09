import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import Register from '../../Component/Register/register';
import Login from '../../Component/Login/login';
import './navbar.css';
//import '../../styles/semantic.min.css'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div class="ui small menu">
                    <a class=" item" href='/'>Home</a>
                    <a class="item" href='/news'>News</a>
                    <a class="item" href='/sender'>Sender</a>
                    <a class="item" href='/receiver'>Receiver</a>
                    <a class="item" href='/manage'>Manage</a>
                    <div class="right menu">
                        <div class="item">
                            <Login/>
                        </div>

                        <div class="item">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;