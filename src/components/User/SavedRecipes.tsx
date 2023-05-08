import { UserAuth } from '../../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getUserData, userCall } from '../../services/userServices';
import { Button, Skeleton, Typography, useMediaQuery } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FlexVertical } from '../styles/Global';
import styles from './User.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SignInModal from './SignInModal';
import RecipesList from './RecipesList';
import { useModalContext } from '../../context/ModalContext';
import { useUserDataQuery } from '../hooks/queries/useUserDataQuery';
import Avatar from '../common/Avatar';
import SkeletonRecipeArray from '../common/SkeletonRecipeArray';
import { useSetTitle } from '../hooks/useSetTitle';

const SavedRecipes = () => {
  const { token, user, logOut } = UserAuth();
  const { signInModalOpen, setSignInModalOpen } = useModalContext();
  const { resolvingUser } = UserAuth();
  useSetTitle();

  const { data, isError } = useUserDataQuery();

  useEffect(() => {
    !user && setSignInModalOpen(true);
  }, [user]);

  if (resolvingUser) {
    <FlexVertical className='py'>
      <Skeleton
        variant='circular'
        sx={{ width: '3rem', height: '3rem' }}
        animation='wave'
      />
      <Skeleton variant='text' width={90} height={60} animation='wave' />
      <Skeleton animation='wave' variant='text' width='7em' />
      <SkeletonRecipeArray />
    </FlexVertical>;
  }

  if (isError || !user) {
    return (
      <div>
        <Typography>User is missing</Typography>
        <SignInModal />
      </div>
    );
  }

  return (
    <FlexVertical className='py'>
      <Avatar />
      <Button variant='outlined' onClick={logOut} className={styles.logout}>
        Log Out
      </Button>
      {user.displayName && <Typography>{user.displayName}</Typography>}
      {data && <RecipesList ids={data.recipes} token={token} />}
    </FlexVertical>
  );
};

export default SavedRecipes;
