import { useModalContext } from '../../context/ModalContext';
import { FlexVertical } from '../styles/Global';
import { memo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AutocompleteResult } from '../../types';
import AnotherOption from './components/AnotherOption';
import MyInput from './components/MyInput';
import Suggestions from './components/Suggestions';
import { useSetTitle } from '../hooks/useSetTitle';

const RecipeQuery = () => {
  const location = useLocation();
  const searchOptions = location.state;
  const { setRecipeSeacrhOpen } = useModalContext();
  const [text, setText] = useState(() => {
    return searchOptions?.title ? searchOptions.title : '';
  });
  const [autocomplete, setAutocomplete] = useState<AutocompleteResult[]>([]);
  const navigate = useNavigate();
  useSetTitle();

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      navigate(`/recipes?q=query`, { state: { title: text, id: null } });
      setRecipeSeacrhOpen(false);
      setAutocomplete([]);
    }
  };

  return (
    <FlexVertical className='full-height py '>
      <MyInput
        text={text}
        setText={setText}
        setAutocomplete={setAutocomplete}
        onKeyPress={handleEnter}
      />
      {autocomplete.length === 0 && <AnotherOption />}
      <Suggestions
        autocomplete={autocomplete}
        setAutocomplete={setAutocomplete}
      />
    </FlexVertical>
  );
};

RecipeQuery.displayName = 'RecipeQuery';

export default memo(RecipeQuery);
