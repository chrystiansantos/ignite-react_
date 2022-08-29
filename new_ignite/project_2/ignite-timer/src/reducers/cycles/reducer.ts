import { produce } from 'immer';
import { ActionTypes } from './actions';

export interface ICycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface ICyclesState {
  cycles: ICycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: ICyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle);
        // eslint-disable-next-line no-param-reassign
        draft.activeCycleId = action.payload.newCycle.id;
      });

    case ActionTypes.INTERRUPTED_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        cycle => cycle.id === state.activeCycleId,
      );
      if (currentCycleIndex < 0) return state;

      return produce(state, draft => {
        // eslint-disable-next-line no-param-reassign
        draft.activeCycleId = null;
        // eslint-disable-next-line no-param-reassign
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISH: {
      const currentCycleIndex = state.cycles.findIndex(
        cycle => cycle.id === state.activeCycleId,
      );
      if (currentCycleIndex < 0) return state;

      return produce(state, draft => {
        // eslint-disable-next-line no-param-reassign
        draft.activeCycleId = null;
        // eslint-disable-next-line no-param-reassign
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }

    default:
      return state;
  }
}
