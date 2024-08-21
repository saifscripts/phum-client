import { Form, TimePicker } from 'antd';
import { Controller } from 'react-hook-form';
import { IHourStep, IMinuteStep, ISecondStep } from '../../interfaces';

interface IPHTimePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  hourStep?: IHourStep;
  minuteStep?: IMinuteStep;
  secondStep?: ISecondStep;
}

const format = 'HH:mm';

const PHTimePicker = ({
  name,
  label,
  placeholder,
  hourStep,
  minuteStep,
  secondStep,
}: IPHTimePickerProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <TimePicker
            {...field}
            placeholder={placeholder || ''}
            style={{ width: '100%' }}
            format={format}
            hourStep={hourStep}
            minuteStep={minuteStep}
            secondStep={secondStep}
          />
          {error && <small style={{ color: 'red' }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHTimePicker;
