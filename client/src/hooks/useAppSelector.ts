import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../types/rootTypes';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
