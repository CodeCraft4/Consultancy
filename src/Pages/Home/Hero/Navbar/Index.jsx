import {Box, Link, List, ListItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'

const Navbar = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', bgcolor: 'rgb(13,56,94)',position:'fixed',width:'100%',zIndex:999}}>
                <Link href="/home" sx={{ color: 'white', fontSize: 20, textDecoration: 'none' }}>JAMES CONSULTING</Link>
                <List sx={{display:{md:'flex',sm:'flex',xs:'none'} }}>
                    <ListItem><Link href="/about" style={linkStyle}>About</Link></ListItem>
                    <ListItem><Link href="#" style={linkStyle}>Project</Link></ListItem>
                    <ListItem><Link href="#" style={linkStyle}>Services</Link></ListItem>
                    <ListItem><Link href="#" style={linkStyle}>Pricing</Link></ListItem>
                    <ListItem><Link href="#" style={linkStyle}>Tools</Link></ListItem>
                    <ListItem><Link href="#" style={linkStyle}>Contact</Link></ListItem>
                    <ListItem style={logIn}><AccountCircleIcon fontSize='large'/><Link href="#" style={logIn}>LogIn</Link></ListItem>
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
