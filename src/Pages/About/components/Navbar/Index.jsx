import {Box, List, ListItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', bgcolor: 'rgb(13,56,94)',position:'fixed',width:'100%',zIndex:999}}>
                <Link to={"/home"} sx={{ color: 'white', fontSize: 20, textDecoration: 'none' }}>JAMES CONSULTING</Link>
                <List sx={{ display: 'flex' }}>
                    <ListItem><Link to={"#"} style={linkStyle}>About</Link></ListItem>
                    <ListItem><Link to={"#"} style={linkStyle}>Project</Link></ListItem>
                    <ListItem><Link to={"#"} style={linkStyle}>Services</Link></ListItem>
                    <ListItem><Link to={"#"} style={linkStyle}>Pricing</Link></ListItem>
                    <ListItem><Link to={"#"} style={linkStyle}>Tools</Link></ListItem>
                    <ListItem><Link to={"#"} style={linkStyle}>Contact</Link></ListItem>
                    <ListItem style={logIn}><AccountCircleIcon fontSize='large'/><Link to={"#"} style={logIn}>LogIn</Link></ListItem>
                </List>
            </Box>
        </React.Fragment>
    )
}

export default Navbar;


const linkStyle = {
    color: 'white',
    textDecoration: 'none',
}

const logIn = {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginLeft:5,
    fontWeight:'bold'
}
