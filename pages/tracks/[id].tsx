
import React, { useState } from "react";
import { ITrack } from '../../types/track';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from "@material-ui/core";
import { getServerSideProps } from './index';
import { GetServerSideProps } from "next";
import axios from 'axios';

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState(serverTrack)
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField
                    label = "Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Коментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>    
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}