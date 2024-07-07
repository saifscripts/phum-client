const getRefreshToken = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/v1/auth/refresh-token`,
    {
      method: 'POST',
      credentials: 'include',
    }
  );
  const data = await res.json();

  return data?.data?.accessToken;
};

export default getRefreshToken;
