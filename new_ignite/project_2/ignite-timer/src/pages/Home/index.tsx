/* eslint-disable jsx-a11y/control-has-associated-label */
import { HandPalm, Play } from 'phosphor-react';
// import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';
import { NewCycleForm } from './components/NewCycleForm';
import { Countdown } from './components/Countdown';
import { useCycles } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'Ciclo precisa ser de no minímo 5 minutos')
    .max(60, 'Ciclo precisa ser de no maxímo 60 minutos'),
});

type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCicle, interruptCurrentCycle } = useCycles();
  // const { register, handleSubmit, watch, formState } = useForm({
  //   resolver: zodResolver(newCycleFormValidationSchema),
  // });
  const newCycleForm = useForm<INewCycleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const isSubmitDisabled = watch('task') === '';

  function handleCreateNewCycle(data: INewCycleFormData) {
    createNewCicle(data);
    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começãr
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
