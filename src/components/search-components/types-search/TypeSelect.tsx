import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material';

const StyledBox = styled(Box)({
  marginBlock: '0.5em',
  minWidth: '300px',
  textAlign: 'center',
});

export interface Props {
  label: string;
  list: string[];
  value: string;
  setValue: (event: string) => void;
}

const TypeSelect = ({ label, list, value, setValue }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <StyledBox sx={{ minWidth: '300px' }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select id={label} value={value} label={label} onChange={handleChange}>
          {list.map((el) => {
            return (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </StyledBox>
  );
};

export default TypeSelect;
