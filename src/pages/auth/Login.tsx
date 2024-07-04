import { Button } from 'antd';
import { jwtDecode } from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { setUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: '456125',
    },
  });
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (credentials: { id: string; password: string }) => {
    const data = await login(credentials).unwrap();
    const token = data.data.accessToken;
    dispatch(setUser({ user: jwtDecode(token), token }));
    navigate(state?.pathname || '/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register('password')} />
      </div>

      <Button type="default" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
