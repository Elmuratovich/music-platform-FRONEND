import React from "react";
import { ITrack } from "../types/track";
import { Card, Grid } from "@material-ui/core";
import styles from '../style/TrackItem.module.scss'
import IconButton from '@material-ui/core/IconButton';
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import router from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    return (
        <>
            <Card>
                <div className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
                    <IconButton onClick={e => e.stopPropagation()}>
                        {active
                            ? <PlayArrow/>
                            :<Pause/>
                        }
                    </IconButton>
                    <img width={70} height={70} src={track.picture} />
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
/* 
const styles = {
    track: {
      textSize: '100px',
      width: 300,
      height: 300,
    },
  } as const; */

export default TrackItem;