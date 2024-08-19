import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

interface IPHSelectProps {
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  options:
    | {
        value?: string;
        label?: string;
        disabled?: boolean;
      }[]
    | undefined;
}

const PHSelect = ({
  name,
  label,
  options = [],
  disabled,
  placeholder,
}: IPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: '100%' }}
            disabled={disabled}
            options={options}
            placeholder={placeholder}
          />
          {error && <small style={{ color: 'red' }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
