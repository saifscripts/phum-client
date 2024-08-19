/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from 'antd';
import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Schema } from 'zod';

interface IPHFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  defaultValues?: Record<string, any>;
  schema?: Schema;
  refetch?: boolean;
}

const PHForm = ({
  children,
  onSubmit,
  defaultValues,
  schema,
}: IPHFormProps) => {
  const methods = useForm({
    defaultValues,
    resolver: schema && zodResolver(schema),
  });

  const submitHandler: SubmitHandler<FieldValues> = async (data) => {
    const shouldReset = await onSubmit(data);
    if (shouldReset) methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submitHandler)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
