import { Form, Select } from 'antd';

interface IPHSelectProps {
  label?: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
}

const PHSelect = ({ label, options }: IPHSelectProps) => {
  return (
    <Form.Item label={label}>
      <Select style={{ width: '100%' }} options={options} />
    </Form.Item>
  );
};

export default PHSelect;
