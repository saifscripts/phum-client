import { Button } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';

const CreateAcademicSemester = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput name="name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateAcademicSemester;
