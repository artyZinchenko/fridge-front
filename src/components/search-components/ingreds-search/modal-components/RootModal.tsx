import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FlexVertical } from '../../../styles/Global';
import SelectTextField from './SelectTextField';
import { styled } from '@mui/material/styles';
import PopularIngredients from './PopularIngredients';
import IngredsFound from './FoundIngreds';
import FoundIngreds from './FoundIngreds';
import { useDebounce } from '../../../hooks/useDebounce';
import { IngredientId } from '../../../../types';
import Announcement from './Announcement';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0%',
  height: '50%',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '10',
  overflow: 'hidden',
  zIndex: '50',
}));

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RootModal = ({ modalOpen, setModalOpen }: Props) => {
  const [text, setText] = useState('');
  const [announcement, setAnnouncement] = useState<IngredientId | null>(null);
  const handleClose = () => setModalOpen(false);
  const debouncedText = useDebounce(text, 300);

  return (
    <Modal open={modalOpen} onClose={handleClose} className='modal'>
      <StyledBox className='modal-content overflow'>
        <div>
          <FlexVertical sx={{ height: '100%' }}>
            <SelectTextField
              handleClose={handleClose}
              text={text}
              setText={setText}
            />
            <Announcement ingredient={announcement} />
            <FoundIngreds
              text={debouncedText}
              setAnnouncement={setAnnouncement}
            />
            <Typography>Popular ingredients:</Typography>
            <PopularIngredients setAnnouncement={setAnnouncement} />
          </FlexVertical>
        </div>
      </StyledBox>
    </Modal>
  );
};
export default RootModal;
