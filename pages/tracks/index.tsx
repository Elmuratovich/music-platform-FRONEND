import { Box, Button } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import { Grid, Card } from "@material-ui/core";
import { ITrack } from '../../types/track';
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/392.mp3', picture: 'http://localhost:5000/image/index.jpeg', comments: []},  
        {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3924.mp3', picture: 'http://localhost:5000/image/images.jpeg', comments: []},
        {_id: '3', name: 'Трек 3', artist: 'Исполнитель 3', text: 'какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/39278.mp3', picture: 'http://localhost:5000/image/cat.jpeg', comments: []},
    ]
    
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks = {tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;