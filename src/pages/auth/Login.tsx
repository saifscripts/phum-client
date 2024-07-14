import { Button, Flex } from 'antd';
import { jwtDecode } from 'jwt-decode';
import { FieldValues } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../../components/form/PHForm';
import PHInput from '../../components/form/PHInput';
import PHPasswordInput from '../../components/form/PHPasswordInput';
import { IDecodedUser } from '../../interfaces';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { setUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';

const defaultValues = {
  id: 'A-0001',
  password: '456125',
};

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (credentials: FieldValues) => {
    const toastId = toast.loading('Logging in...');
    try {
      const data = await login(credentials).unwrap();
      const token = data.data.accessToken;
      const user = jwtDecode(token) as IDecodedUser;
      dispatch(setUser({ user, token }));
      toast.success('Successfully logged in!', { id: toastId, duration: 2000 });
      navigate(state?.pathname || `/${user.role}/dashboard`);
    } catch (error) {
      toast.error('Something Went Wrong!', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Flex style={{ height: '100vh' }} justify="center" align="center">
      <div
        style={{
          border: '1px solid #eeeeee',
          padding: '20px',
          borderRadius: '16px',
        }}
      >
        <PHForm defaultValues={defaultValues} onSubmit={onSubmit}>
          <Flex vertical gap="middle">
            <PHInput name="id" label="User ID" placeholder="User ID" />
            <PHPasswordInput
              name="password"
              label="Password"
              placeholder="Input Password"
            />

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Flex>
        </PHForm>
      </div>
    </Flex>
  );
};

export default Login;
