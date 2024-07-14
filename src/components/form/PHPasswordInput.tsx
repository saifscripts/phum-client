import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

interface IPHPasswordInputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const PHPasswordInput = ({
  name,
  label,
  placeholder,
}: IPHPasswordInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Input.Password
            {...field}
            placeholder={placeholder || ''}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          {error && <small style={{ color: 'red' }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHPasswordInput;
