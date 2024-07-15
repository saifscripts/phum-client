import { Button, Col, Flex, Form } from 'antd';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { monthOptions, semesterOptions, yearOptions } from '../../../constants';
import { IAcademicSemester, IResponse } from '../../../interfaces';
import { useCreateSemesterMutation } from '../../../redux/features/admin/academicManagement/academicManagementApi';
import { academicSemesterSchema } from '../../../schemas/academicManagement';

const CreateAcademicSemester = () => {
  const [createSemester] = useCreateSemesterMutation();

  const onSubmit = async (data: FieldValues) => {
    data.code = data?.name;
    data.name = semesterOptions?.[Number(data?.name) - 1]?.label;

    const res = (await createSemester(data)) as IResponse<IAcademicSemester>;

    if (res.error) {
      toast.error(res.error.data.message);
    } else {
      toast.success(res.data?.message);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm onSubmit={onSubmit} schema={academicSemesterSchema}>
          <PHSelect name={'name'} label="Name" options={semesterOptions} />
          <PHSelect name={'year'} label="Year" options={yearOptions} />
          <PHSelect
            name={'startMonth'}
            label="Start Month"
            options={monthOptions}
          />
          <PHSelect
            name={'endMonth'}
            label="End Month"
            options={monthOptions}
          />
          <Form.Item>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
