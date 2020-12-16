import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class StaticHeader extends React.Component {
    render() {
      return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              Star Wars Information Center
            </Navbar.Brand>
        </Navbar>
        </>
      );
    }
  }