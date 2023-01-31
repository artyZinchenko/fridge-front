import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  to: string;
  delay: number;
  children: ReactNode;
}

const DelayedLink = ({ to, delay, children }: Props) => {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    setTimeout(() => {
      navigate(to);
    }, delay);
  }
  return <Box onClick={(e) => handleClick(e)}>{children}</Box>;
};

export default DelayedLink;
