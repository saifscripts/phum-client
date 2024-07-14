import { Button, Col, Flex, Form } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { monthOptions, semesterOptions, yearOptions } from '../../../constants';
import { academicSemesterSchema } from '../../../schemas/academicManagement';

const CreateAcademicSemester = () => {
  const onSubmit = (data: FieldValues) => {
    data.code = data?.name;
    data.name = semesterOptions?.[Number(data?.name) - 1]?.label;

    console.log(data);
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
