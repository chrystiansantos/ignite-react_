import { ICycle } from './reducer';

// eslint-disable-next-line no-shadow
export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPTED_CURRENT_CYCLE = 'INTERRUPTED_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISH = 'MARK_CURRENT_CYCLE_AS_FINISH',
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISH,
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPTED_CURRENT_CYCLE,
  };
}
