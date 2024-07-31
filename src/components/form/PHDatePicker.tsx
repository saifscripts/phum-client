import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

interface IPHDatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const PHDatePicker = ({ name, label, placeholder }: IPHDatePickerProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <DatePicker
            {...field}
            style={{ width: '100%' }}
            placeholder={placeholder || ''}
          />
          {error && <small style={{ color: 'red' }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHDatePicker;
