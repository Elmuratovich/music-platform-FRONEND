import { Container } from "@mui/material";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function MainLayout({children}) {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}    
            </Container>

        </>
    );
};
