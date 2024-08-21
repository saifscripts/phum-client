import { Form, Select } from 'antd';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

interface IPHSelectWithWatchProps {
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  mode?: 'multiple' | 'tags';
  options:
    | {
        value?: string;
        label?: string;
        disabled?: boolean;
      }[]
    | undefined;
  onValueChange: Dispatch<SetStateAction<string>>;
}

const PHSelectWithWatch = ({
  name,
  label,
  options = [],
  disabled,
  placeholder,
  mode,
  onValueChange,
}: IPHSelectWithWatchProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({ control, name });

  useEffect(() => {
    onValueChange(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            mode={mode}
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

export default PHSelectWithWatch;
