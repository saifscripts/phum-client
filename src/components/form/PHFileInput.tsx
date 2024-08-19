import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

interface IPHFileInputProps {
  label?: string;
}

const PHFileInput = ({ label }: IPHFileInputProps) => {
  return (
    <Controller
      name="image"
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => (
        <Form.Item label={label}>
          <Input
            {...field}
            type="file"
            value={value?.fileName}
            onChange={(e) => onChange(e.target.files?.[0])}
          />
          {error && <small style={{ color: 'red' }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHFileInput;
