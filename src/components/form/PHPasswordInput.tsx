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
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input.Password
              {...field}
              placeholder={placeholder || ''}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHPasswordInput;
