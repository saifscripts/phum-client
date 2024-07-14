import { Button, Col, Flex, Form } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';

const nameOptions = [
  { value: '01', label: 'Autumn' },
  { value: '02', label: 'Summer' },
  { value: '03', label: 'Fall' },
];

const currentYear = new Date().getFullYear();

const yearOptions = Array(10)
  .fill(null)
  .map((_item, index) => {
    const year = String(currentYear + index);

    return {
      value: year,
      label: year,
    };
  });

const monthOptions = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
];

const CreateAcademicSemester = () => {
  const onSubmit = (data: FieldValues) => {
    data.code = data.name;
    data.name = nameOptions[Number(data.name) - 1].label;

    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect name={'name'} label="Name" options={nameOptions} />
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
