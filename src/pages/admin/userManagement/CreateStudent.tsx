import { Button } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    formData.append('data', JSON.stringify(data));
    console.log(Object.fromEntries(formData));
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput name="name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent;
