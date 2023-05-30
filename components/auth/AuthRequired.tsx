import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { userState } from '@atom/userState';
import { useRecoilValue } from 'recoil';

interface AuthProps {
  children: ReactNode;
}

function AuthRequired({ children }: AuthProps) {
  const router = useRouter();
  const accessToken = useRecoilValue(userState);
  useEffect(() => {
    if (router.isReady && accessToken === null) {
      alert('Please Login!');
      router.replace('/');
    }
  }, []);
  return <div>{children}</div>;
}

export default AuthRequired;
