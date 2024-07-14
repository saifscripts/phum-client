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
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Input
            {...field}
            type={type || 'text'}
            placeholder={placeholder || ''}
          />
          {error && <small style={{ color: 'red' }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHInput;
