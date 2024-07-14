import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import { Controller } from 'react-hook-form';

interface ICPasswordInputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const CPasswordInput = ({ name, label, placeholder }: ICPasswordInputProps) => {
  return (
    <div>
      {label && <Typography.Title level={5}>{label}</Typography.Title>}
      <Controller
        name={name}
        render={({ field }) => (
          <Input.Password
            {...field}
            placeholder={placeholder || ''}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        )}
      />
    </div>
  );
};

export default CPasswordInput;
