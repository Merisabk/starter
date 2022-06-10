import React from 'react'
import '../App.css';
import Nav from 'react-bootstrap/Nav'

const Header = () =>
{
    return (
        <>
        <Nav className="nav">
        <Nav.Item>
            <Nav.Link to="https://www.qa.com" target="_blank" rel="noopener noreferrer"><img className="nav-logo navbar-brand" src= "https://th.bing.com/th/id/R.0df715972fe2f61811d17d313fab2449?rik=u4Hyb2g7lHOa0g&pid=ImgRaw&r=0&sres=1&sresct=1" alt="QA Ltd"></img> </Nav.Link>
        </Nav.Item>
        <h1><Nav.Link to= "/">Todo App</Nav.Link></h1>
        </Nav>
        </>
    )
}

export default Header;