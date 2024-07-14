import { Input, Typography } from 'antd';
import { Controller } from 'react-hook-form';

interface ICInputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const CInput = ({ name, label, placeholder }: ICInputProps) => {
  return (
    <div>
      {label && <Typography.Title level={5}>{label}</Typography.Title>}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} placeholder={placeholder || ''} />
        )}
      />
    </div>
  );
};

export default CInput;
