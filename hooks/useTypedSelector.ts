import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from '../store/reducers/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector