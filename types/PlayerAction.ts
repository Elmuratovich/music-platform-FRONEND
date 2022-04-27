import { PlayAction, PauseAction, SetActiveAction, SetDurationAction, SetVolumeAction, SetCurrentTimeAction, PlayerActionTypes } from './player';


export type PlayerAction =
    PlayAction |
    PauseAction |
    SetActiveAction |
    SetDurationAction |
    SetVolumeAction |
    SetCurrentTimeAction |
    PlayerActionTypes;
