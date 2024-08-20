import { Button, Form } from 'antd';
import { useFormContext } from 'react-hook-form';

const Submit = () => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Form.Item>
      <Button
        loading={isSubmitting}
        style={{ width: '100%' }}
        type="primary"
        htmlType="submit"
      >
        Submit
      </Button>
    </Form.Item>
  );
};

export default Submit;
