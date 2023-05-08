import { useQuery } from '@tanstack/react-query';
import { UserAuth } from '../../../context/AuthContext';
import { getUserData } from '../../../services/userServices';

export const useUserDataQuery = () => {
  const { token } = UserAuth();

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ['user', token],
    queryFn: async () => {
      const data = await getUserData(token);
      return data;
    },
  });

  return { data, error, isError, isSuccess };
};
