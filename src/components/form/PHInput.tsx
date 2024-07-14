import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

interface IPHInputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
}

const PHInput = ({ name, type, label, placeholder }: IPHInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type || 'text'}
              placeholder={placeholder || ''}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
