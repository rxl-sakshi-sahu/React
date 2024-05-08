import React from 'react'
import './Footer.css';

export const Footer = () =>{
    // can be done using object too or just make a seperate file and include css there
    // just make sure to import the file here with correct name

    // let footerStyle={    
    //     position: "absolute",
    //     top: "100vh",
        // width: "100%"
    // }
    return(
        
    // <footer className='bg-dark text-light' style={footerStyle}>
        <footer className='bg-dark text-light'>
        <p className='text-center'>
            Copyright @copy; MyTodoList.com
        </p>
    </footer>
    );
}