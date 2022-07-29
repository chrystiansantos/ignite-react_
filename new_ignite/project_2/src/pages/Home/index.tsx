/* eslint-disable jsx-a11y/control-has-associated-label */
import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'Ciclo precisa ser de no minímo 5 minutos')
    .max(60, 'Ciclo precisa ser de no maxímo 60 minutos'),
});

type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  // const { register, handleSubmit, watch, formState } = useForm({
  //   resolver: zodResolver(newCycleFormValidationSchema),
  // });
  const { register, handleSubmit, watch, reset } = useForm<INewCycleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  });

  function handleCreateNewCicle(data: INewCycleFormData) {
    try {
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  const isSubmitDisabled = watch('task') === '';

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormContainer>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={608}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Começãr
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
