import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useGoogleAuth } from "@api/auth/googleAuth";
import { userState } from "@atom/userState";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavigationComponent from "./Navigation";
import {
  CustomContainer,
  InfoArea,
  LogOutButton,
  LoginButton,
  Mypage,
} from "./style";

const Header = () => {
  const accessToken = useRecoilValue(userState);
  const { handleLogin, handleLogout } = useGoogleAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!accessToken);
  }, [accessToken]);

  return (
    <CustomContainer maxWidth={false}>
      <NavigationComponent />
      <InfoArea>
        {isLoggedIn ? (
          <>
            <NotificationsIcon
              sx={{ width: "36px", height: "36px", mr: "45px" }}
            />
            <LogOutButton
              sx={{ mr: "30px", fontSize: "18px" }}
              onClick={handleLogout}
            >
              Log out
            </LogOutButton>
            <Mypage href="">My Page</Mypage>
          </>
        ) : (
          <LoginButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogin()}
          >
            Login
          </LoginButton>
        )}
      </InfoArea>
    </CustomContainer>
  );
};

export default Header;
