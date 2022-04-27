
import React, { useEffect } from 'react';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import styles from '../styles/Player.module.scss';
import { Grid, IconButton } from '@material-ui/core';
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

let audio;

const Player = () => {
    const track: ITrack = { _id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/4253b378-15a8-4df6-b17d-d605a9fbb097.mp3', picture: 'http://localhost:5000/image/d5dee239-8029-4082-b513-acf3cb356783.jpeg', comments: [] }
    const { pause, volume, duration, active, currentTime } = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

    useEffect(() => {
        if(!audio){
            audio = new Audio();
            audio.src = track.audio
        }
    }, [])

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value))
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {!pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    );
};

export default Player;