import { useDispatch } from 'react-redux';
import { RootDispatch } from '../types/rootTypes';

export const useAppDispatch: () => RootDispatch = useDispatch;
