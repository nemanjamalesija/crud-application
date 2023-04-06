import { ACTIONS } from '../actions/actions';
import { stateType } from './stateType';

export type contextType = {
  state: stateType;
  dispatch: React.Dispatch<ACTIONS>;
};
