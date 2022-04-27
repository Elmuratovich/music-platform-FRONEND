import { Box, Button } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import { Grid, Card } from "@material-ui/core";
import { ITrack } from '../../types/track';
import TrackList from "../../components/TrackList";
import { useActions } from '../../hooks/useActions';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/4253b378-15a8-4df6-b17d-d605a9fbb097.mp3', picture: 'http://localhost:5000/image/d5dee239-8029-4082-b513-acf3cb356783.jpeg', comments: []},  
        {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/2f36300c-a44b-430c-a3ff-cb333cf474bd.mp3', picture: 'http://localhost:5000/image/649a9857-1bc5-4468-94c5-d3b8d7cc5ae5.png', comments: []},
        {_id: '3', name: 'Трек 3', artist: 'Исполнитель 3', text: 'какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/40a34db5-c585-4a75-b516-3d7a132d425a.mp3', picture: 'http://localhost:5000/image/05ba8dd4-afe7-4cfe-baa5-c709e37ae51e.jpeg', comments: []},
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