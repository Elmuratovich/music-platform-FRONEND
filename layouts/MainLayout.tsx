import { Container } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

interface MainLayoutProps {
    title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Музыкальная плошадка'}</title>
            </Head>
            <Navbar />
            <Container style={{ margin: '90px 0' }}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;