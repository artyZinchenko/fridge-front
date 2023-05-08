import { useQuery } from '@tanstack/react-query';
import { UserAuth } from '../../context/AuthContext';
import { getUserData } from '../../services/userServices';

const Shop = () => {
  const { token } = UserAuth();

  const { isLoading, isError, data, error, isSuccess } = useQuery({
    queryKey: ['user-data'],
    queryFn: async () => {
      const data = await getUserData(token);
      return data;
    },
    enabled: !!token,
  });

  if (isSuccess) {
    // const structuredData = data.ingredients.reduce((acc, item) => {
    //   const { aisle, name, id } = item;
    //   const index = acc.findIndex((obj) => obj.aisle === aisle);
    //   if (index === -1) {
    //     acc.push({ aisle, items: [{ id, name }] });
    //   } else {
    //     acc[index].items.push({ id, name });
    //   }
    //   return acc;
    // }, []);
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    if (error instanceof Error) return <span>Error: {error.message}</span>;
  }

  // return (
  //   data?.ingredients.map({
  //     data
  //   })
  // );
};
export default Shop;
