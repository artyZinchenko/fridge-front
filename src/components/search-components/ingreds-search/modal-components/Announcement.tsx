import { Box, Typography } from '@mui/material';
import { IngredientId } from '../../../../types';
import { styled } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  ingredient: IngredientId | null;
}

const GapBox = styled(Box)({
  height: '1.5em',
  margin: '-0.5em',
});

const StyledBox = styled(Box)({
  paddingLeft: '2em',
  backgroundColor: 'lightgray',
  width: '100%',
  height: '1.5em',
  margin: '-0.5em',
});

const Announcement = ({ ingredient }: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    ingredient && setText(ingredient.name);
    const handler = setTimeout(() => setText(''), 800);

    return () => clearTimeout(handler);
  }, [ingredient]);

  if (text.length > 0) {
    return (
      <StyledBox>
        <Typography>{text} added</Typography>
      </StyledBox>
    );
  } else return <GapBox />;
};

export default Announcement;
