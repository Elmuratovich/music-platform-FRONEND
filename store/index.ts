import {Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";
import { RootState, reducer } from './reducers';


// create a makeStore function
const makeStore = 
    (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});