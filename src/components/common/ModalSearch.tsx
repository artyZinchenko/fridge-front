import { Modal, styled, Box } from '@mui/material';
import { ReactNode } from 'react';
import { useModalContext } from '../../context/ModalContext';
import RecipeQuery from '../RecipeQuery/RecipeQuery';

const StyledBox = styled(Box)(({ theme }) => ({
  zIndex: '50',
  position: 'absolute',
  top: '0%',
  right: '0%',
  height: '50%',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '24',
  overflow: 'hidden',
}));

const ModalSearch = () => {
  const { recipeSearchOpen, setRecipeSeacrhOpen } = useModalContext();

  return (
    <Modal
      className='modal'
      open={recipeSearchOpen}
      onClose={() => setRecipeSeacrhOpen(false)}
    >
      <StyledBox className='modal-content'>
        <RecipeQuery />
      </StyledBox>
    </Modal>
  );
};

export default ModalSearch;
