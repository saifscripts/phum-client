import { Input, Typography } from 'antd';
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
      {label && <Typography.Title level={5}>{label}</Typography.Title>}
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type || 'text'}
            placeholder={placeholder || ''}
          />
        )}
      />
    </div>
  );
};

export default PHInput;
