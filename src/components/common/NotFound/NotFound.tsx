import { Button, Typography } from '@mui/material';
import { FlexVertical } from '../../styles/Global';
import { useNavigate, useRouteError } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const notFoundImg = require('../../../assets/404.webp');

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='not-found py px'>
      <FlexVertical>
        <Typography variant='h6'>Woops!</Typography>
        <Typography>Page not found</Typography>
        {error instanceof Error && <i>{error.message}</i>}
        <div className='image'>
          <img src={notFoundImg} />
        </div>
        <Button variant='contained' color='inherit' onClick={handleClick}>
          Take me home
        </Button>
      </FlexVertical>
    </div>
  );
};
export default NotFound;
