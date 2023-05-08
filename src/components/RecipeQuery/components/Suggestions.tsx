import { AutocompleteResult } from '../../../types';
import LinkToRecipe from './LinkToRecipe';
import '../styles.css';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../../context/ModalContext';

interface Props {
  autocomplete: AutocompleteResult[];
  setAutocomplete: Dispatch<SetStateAction<AutocompleteResult[]>>;
}

const Suggestions = ({ autocomplete, setAutocomplete }: Props) => {
  const navigate = useNavigate();
  const { setRecipeSeacrhOpen } = useModalContext();

  const handleClick = (item: AutocompleteResult) => {
    navigate(`/recipes?q=query`, { state: item });
    setRecipeSeacrhOpen(false);
    setAutocomplete([]);
  };

  return (
    <div className='content-component overlay'>
      {autocomplete.map((item) => {
        return (
          <LinkToRecipe key={item.id} item={item} handleClick={handleClick} />
        );
      })}
    </div>
  );
};
export default Suggestions;
