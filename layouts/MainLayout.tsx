import { Container } from "@mui/material";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

export default function MainLayout({children}) {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}    
            </Container>
            <Player/>
        </>
    );
};
