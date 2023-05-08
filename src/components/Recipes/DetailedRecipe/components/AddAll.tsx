import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useModalContext } from '../../../../context/ModalContext';
import { useShopContext } from '../../../../context/ShopContext';
import { userSaveIngredients } from '../../../../services/ingredientService';
import { ExtendedIngred, UserData } from '../../../../types';

interface Props {
  extendedIngredients: ExtendedIngred[];
  token: string;
  data: UserData | undefined;
}

const AddAll = ({ extendedIngredients, token, data }: Props) => {
  const [saved, setSaved] = useState(false);
  const { setIngredients } = useShopContext();
  const { setSignInModalOpen } = useModalContext();

  const handleSaveAll = async () => {
    if (!data) {
      setSignInModalOpen(true);
      return;
    }
    await userSaveIngredients(token, extendedIngredients);
    setIngredients(extendedIngredients);
    setSaved(true);
  };

  return (
    <div>
      {saved ? (
        <Typography>Ingredients are saved to the shopping cart</Typography>
      ) : (
        <div className='flex-row flex-gap pointer py' onClick={handleSaveAll}>
          <AddShoppingCartIcon fontSize='small' color='primary' />
          <Typography>Add all to shopping cart</Typography>
        </div>
      )}
    </div>
  );
};

export default AddAll;
