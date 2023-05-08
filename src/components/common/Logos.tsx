/* eslint-disable @typescript-eslint/no-var-requires */
import { useEffect, useState } from 'react';
import './Icons.css';

export const SmallLogo = () => {
  const icon = require('../../assets/MealMasterLogo.png');
  return (
    <div>
      {icon && (
        <div className='small-icon'>
          <img src={icon} />
        </div>
      )}
    </div>
  );
};

export const ExpandedLogo = () => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const mealMasterIcon = require('../../assets/MealMaster.png');
    setIcon(mealMasterIcon);
  }, []);

  return (
    <div>
      {icon ? (
        <div className='icon'>
          <img src={icon} />
        </div>
      ) : null}
    </div>
  );
};
