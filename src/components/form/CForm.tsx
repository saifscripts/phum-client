/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface ICFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  defaultValues: Record<string, any>;
  style: Record<string, any>;
}

const CForm = ({ children, onSubmit, defaultValues, style }: ICFormProps) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form style={style} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CForm;
