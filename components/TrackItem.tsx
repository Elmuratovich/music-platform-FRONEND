import React from "react";
import { ITrack } from "../types/track";
import { Card } from "@material-ui/core";
import styles from '../style/TrackItem.module.scss'
import IconButton from '@material-ui/core/IconButton';
import { Pause, PlayArrow } from "@material-ui/icons";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = true }) => {
    return (
        <>
            <Card>
                <div className={styles.track}>
                    <IconButton>
                        {active
                            ? <PlayArrow/>
                            :<Pause/>
                        }
                    </IconButton>
                    <img width={70} height={70} src={track.picture} />
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