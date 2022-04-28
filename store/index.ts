import {Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { RootState, reducer } from './reducers';


// create a makeStore function
const makeStore = 
    (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>