import { Typography, Box } from '@mui/material';
import { FlexSpaceBetween, FlexStart } from '../styles/Global';
import { styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

interface StyledProps {
  searchByIngreds: boolean;
}

const SearchByIngreds = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'searchByIngreds',
})<StyledProps>(({ searchByIngreds, theme }) => ({
  color: searchByIngreds
    ? theme.palette.text.primary
    : theme.palette.text.secondary,
  paddingInline: '1em',
  width: '100%',
  paddingBlock: '0.5em',
}));

const SearchByTypes = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'searchByIngreds',
})<StyledProps>(({ searchByIngreds, theme }) => ({
  color: searchByIngreds
    ? theme.palette.text.secondary
    : theme.palette.text.primary,
  paddingInline: '1em',
  width: '100%',
  height: '100%',
  paddingBlock: '0.5em',
}));

interface Props {
  searchByIngreds: boolean;
  setSearchByIngreds: (arg0: boolean) => void;
}

const OptionsSelect = ({ searchByIngreds, setSearchByIngreds }: Props) => {
  const theme = useTheme();

  return (
    <FlexSpaceBetween
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <SearchByIngreds
        onClick={() => setSearchByIngreds(true)}
        searchByIngreds={searchByIngreds}
      >
        <FlexStart>
          <KitchenIcon fontSize='inherit' />
          <Typography>Ingredients</Typography>
        </FlexStart>
      </SearchByIngreds>
      <SearchByTypes
        onClick={() => setSearchByIngreds(false)}
        searchByIngreds={searchByIngreds}
      >
        <FlexStart>
          <FilterAltIcon fontSize='inherit' />
          <Typography>Filters</Typography>
        </FlexStart>
      </SearchByTypes>
    </FlexSpaceBetween>
  );
};

export default OptionsSelect;
