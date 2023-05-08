import { FlexSpaceBetween } from '../styles/Global';
import { useModalContext } from '../../context/ModalContext';
import { SmallLogo } from '../common/Logos';
import MenuIcon from '@mui/icons-material/Menu';

const MobileHeader = () => {
  const { setMobileSidebarOpen } = useModalContext();

  return (
    <div style={{ paddingInline: '1em' }}>
      <FlexSpaceBetween>
        <SmallLogo />
        <MenuIcon
          onClick={() => setMobileSidebarOpen(true)}
          className='pointer'
        />
      </FlexSpaceBetween>
    </div>
  );
};

export default MobileHeader;
