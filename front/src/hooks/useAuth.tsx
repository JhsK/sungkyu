import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getAuth } from 'src/api';
import { currentUserState } from 'src/atom';
import { currentUserType } from 'src/constant';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useRecoilState<currentUserType>(currentUserState);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAuth();
      if (Object.keys(data).length === 0) {
        setCurrentUser({ isAuthenticated: false, ...data });
      } else setCurrentUser({ isAuthenticated: true, ...data });
    };
    fetchData();
  }, []);
  return currentUser;
};

export default useAuth;
