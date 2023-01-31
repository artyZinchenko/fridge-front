import { useState } from 'react';
import { FlexStart, FlexVertical } from '../../styles/Global';
import { Box } from '@mui/material';

import {
  cuisineTypes,
  dietTypes,
  mealTypes,
} from '../../../data/searchOptions';
import TypeSelect from './TypeSelect';

interface Props {
  mealType: string;
  setMealType: (event: string) => void;
  cuisineType: string;
  setCuisineType(event: string): void;
  dietType: string;
  setDietType(event: string): void;
}

const SelectGroup = ({
  mealType,
  setMealType,
  cuisineType,
  setCuisineType,
  dietType,
  setDietType,
}: Props) => {
  return (
    <FlexVertical>
      <TypeSelect
        label={'meal'}
        list={mealTypes}
        value={mealType}
        setValue={setMealType}
      />
      <TypeSelect
        label={'cuisine'}
        list={cuisineTypes}
        value={cuisineType}
        setValue={setCuisineType}
      />
      <TypeSelect
        label={'diet'}
        list={dietTypes}
        value={dietType}
        setValue={setDietType}
      />
    </FlexVertical>
  );
};

export default SelectGroup;
