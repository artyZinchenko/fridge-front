import { useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext';

interface Props {
  children: ReactNode;
  to: string;
  handleClick?: () => void;
}

const MyLink = ({ children, to }: Props) => {
  const matches = useMediaQuery('(min-width:40em)');
  const { setMobileSidebarOpen } = useModalContext();

  const handler = async () => {
    !matches && setMobileSidebarOpen(false);
  };

  return (
    <Link to={to} onClick={handler}>
      {children}
    </Link>
  );
};

export default MyLink;
