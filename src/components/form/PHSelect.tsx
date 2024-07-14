import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

interface IPHSelectProps {
  name: string;
  label?: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
}

const PHSelect = ({ name, label, options }: IPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select {...field} style={{ width: '100%' }} options={options} />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
