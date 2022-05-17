import { atom, selector } from 'recoil';
import { getAuth } from 'src/api';
import { currentUserType } from 'src/constant';

export const currentUserState = atom<currentUserType>({
  key: 'currentUser',
  default: {
    isAuthenticated: false,
  },
});

export const currentUserSelector = selector({
  key: 'currentUserSelector',
  get: async () => {
    const { data } = await getAuth();

    if (Object.keys(data).length !== 0) {
      data.isAuthenticated = true;
    }

    return data;
  },
});

export const postsInfinite = atom({
  key: 'postsInfinite',
  default: false,
});
