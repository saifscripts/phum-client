/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

interface IPHFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  defaultValues?: Record<string, any>;
}

const PHForm = ({ children, onSubmit, defaultValues }: IPHFormProps) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
