import { differenceInSeconds } from 'date-fns';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishAction,
} from '../reducers/cycles/actions';
import { cyclesReducer, ICycle } from '../reducers/cycles/reducer';

interface ICreateCycleData {
  task: string;
  minutesAmount: number;
}

interface ICyclesContextType {
  cycles: ICycle[];
  activeCycle: ICycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCicle: (data: ICreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

const CyclesContext = createContext({} as ICyclesContextType);

interface ICyclesContextProviderProps {
  children: ReactNode;
}

function CyclesContextProvider({ children }: ICyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return {};
    },
  );
  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishAction());
  }

  function createNewCicle({ task, minutesAmount }: ICreateCycleData) {
    try {
      const newCycle: ICycle = {
        id: new Date().getTime().toString(),
        task,
        minutesAmount,
        startDate: new Date(),
      };
      dispatch(addNewCycleAction(newCycle));
      setAmountSecondsPassed(0);
    } catch (error) {
      console.log(error);
    }
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction());
  };

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON);
  }, [cyclesState]);

  return (
    <CyclesContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCicle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}

const useCycles = () => {
  return useContext(CyclesContext);
};

export { CyclesContextProvider, useCycles };
