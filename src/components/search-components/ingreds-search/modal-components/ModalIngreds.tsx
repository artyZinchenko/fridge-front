import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FlexVertical } from '../../../styles/Global';
import SelectIngreds from './SelectIngreds';
import { styled } from '@mui/material/styles';
import PopularIngredients from './PopularIngredients';
import IngredsFound from './FoundIngreds';
import FoundIngreds from './FoundIngreds';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0%',
  height: '50%',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  // boxShadow: '24',
  p: 4,
  overflow: 'hidden',
}));

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalIngreds = ({ modalOpen, setModalOpen }: Props) => {
  const [text, setText] = useState('');
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledBox>
          <FlexVertical sx={{ height: '100%' }}>
            <SelectIngreds
              handleClose={handleClose}
              text={text}
              setText={setText}
            />
            <FoundIngreds text={text} />
            <Typography>Popular ingredients:</Typography>
            <PopularIngredients />
          </FlexVertical>
        </StyledBox>
      </Modal>
    </div>
  );
};
export default ModalIngreds;
