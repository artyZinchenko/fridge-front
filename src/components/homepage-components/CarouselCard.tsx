import { CardContent, Typography, CardActions, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import { styled } from '@mui/material';

const StyledCard = styled(Card)({
  borderTopLeftRadius: '0.5em',
  borderTopRightRadius: '0.5em',
});

interface Props {
  imgName: string;
  title: string;
  description: string;
}

const CarouselCard = ({ imgName, title, description }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const image = require(`../../assets/${imgName}.jpg`);
  // const image = `../../assets/${imgName}.jpg`;
  return (
    <StyledCard>
      <CardMedia component='img' alt={title} height='140' image={image} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size='small' sx={{ marginLeft: '1em' }}>
          Try it
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default CarouselCard;
