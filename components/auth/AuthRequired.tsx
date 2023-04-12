import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { userState } from "@atom/userState";
import { useRecoilValue } from "recoil";

interface AuthProps {
  children: ReactNode;
}

const AuthRequired: FC<AuthProps> = ({ children }) => {
  const router = useRouter();
  const accessToken = useRecoilValue(userState);
  useEffect(() => {
    if (router.isReady && accessToken === null) {
      alert("Please Login!");
      router.replace("/");
    }
  }, []);
  return <>{children}</>;
};

export default AuthRequired;
