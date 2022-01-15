import { atom } from 'recoil';
import { currentUserType } from 'src/constant';

export const currentUserState = atom<currentUserType>({
  key: 'currentUser',
  default: {
    isAuthenticated: false,
  },
});
