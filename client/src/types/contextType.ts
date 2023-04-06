import { peopleActions } from '../actions/peopleActions';
import { personActions } from '../actions/personActions';
import { stateType } from './rootState';

export type contextType = {
  state: stateType;
  dispatch: React.Dispatch<peopleActions | personActions>;
};
