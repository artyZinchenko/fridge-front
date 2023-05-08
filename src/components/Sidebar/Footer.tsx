import { Typography } from '@mui/material';
import {
  CenterChildElement,
  FlexEnd,
  FlexSpaceBetween,
  FlexStart,
} from '../styles/Global';
import './Footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
      <FlexStart>
        <a
          href='https://github.com/artyZinchenko'
          target={'_blank'}
          rel='noreferrer'
        >
          <GitHubIcon color='disabled' />
        </a>
        <a
          href='https://www.linkedin.com/in/artem-zinchenko-frontend/'
          target={'_blank'}
          rel='noreferrer'
        >
          <LinkedInIcon color='disabled' />
        </a>
      </FlexStart>
      <Typography sx={{ fontSize: '0.5em' }}>
        {' '}
        ™2023 MealMaster. All rights reserved{' '}
      </Typography>
      <Typography variant='subtitle1'>
        Powered by{' '}
        <a
          href='https://spoonacular.com/food-api'
          target={'_blank'}
          rel='noreferrer'
        >
          <span className='spoonacular'>spoonacular</span>
        </a>
      </Typography>
    </div>
  );
};
export default Footer;
