import React from "react";
import { ITrack } from "../types/track";
import { Card, Grid } from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss'
import IconButton from '@material-ui/core/IconButton';
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
//import router from "next/router";
import { useRouter } from 'next/router';
import { setActiveTrack, playTrack } from '../store/actions-creators/player';
import { useActions } from '../hooks/useActions';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;style
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = true }) => {
    const router = useRouter();
    const {playTrack, pauseTrack, setActiveTrack} = useActions()

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack
    }
    return (
        <>
            <Card>
                <div className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
                    <IconButton onClick={play}>
                        {active
                            ? <PlayArrow/>
                            :<Pause/>
                        }
                    </IconButton>
                    <img width={70} height={70} src={'http://localhost:5000/' + track.picture} />
                    <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                        <div>{track.name}</div>
                        <div style={{ fontSize: 12, color: 'gray'}}>{track.artist}</div>
                    </Grid>
                    {active && <div>02:42 / 03:22</div>}
                    <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                        <Delete/>
                    </IconButton>
                </div>
            </Card>
        </>
    );

};

export default TrackItem;