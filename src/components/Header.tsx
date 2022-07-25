import React from "react";
import {Container, Navbar, NavbarBrand} from "react-bootstrap";


export const Header:React.FunctionComponent=()=>{
    return(
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <NavbarBrand>
                    React typescript bootstrap
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}