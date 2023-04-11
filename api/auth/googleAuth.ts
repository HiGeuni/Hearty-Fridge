import { useGoogleLogin } from "@react-oauth/google";
import { axiosInstance } from "..";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../atom/userState";

export const useGoogleAuth = () => {
  const setAccessToken = useSetRecoilState(userState);
  const resetAccessToken = useResetRecoilState(userState);

  const handleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      const accessToken: string = response.access_token;
      try {
        const { data } = await axiosInstance.post(`/member/googleLogin`, {
          accessToken: accessToken,
        });
        setAccessToken(data.accessToken);
      } catch (error) {
        console.error("error: ", error);
      }
    },
  });

  const handleLogout = () => {
    resetAccessToken();
  };

  return { handleLogin, handleLogout };
};
