import { Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/logo.png";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useGoogleAuth } from "@api/auth/googleAuth";
import { userState } from "@atom/userState";
import styled from "@emotion/styled";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Theme } from "@emotion/react";

const Header = () => {
  const accessToken = useRecoilValue(userState);
  const { handleLogin, handleLogout } = useGoogleAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!accessToken);
  }, [accessToken]);

  return (
    <CustomContainer>
      <Navigation>
        <Image width={145} height={120} src={logo} alt="logo" />
        <CustomLink href="">Intro</CustomLink>
        <CustomLink href="">Map</CustomLink>
      </Navigation>
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
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleLogin()
            }
          >
            Login
          </LoginButton>
        )}
      </InfoArea>
    </CustomContainer>
  );
};

export default Header;

const CustomContainer = styled(Container)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 80px",
});

const Navigation = styled.div(({ theme }) => ({
  display: "flex",
  fontSize: "20px",
  columnGap: "33px",
  alignItems: "center",
}));

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.custom.secondary.main,
  textDecoration: "none",
}));

const InfoArea = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  fontSize: "18px",
});

const LoginButton = styled(Button)(({ theme }) => ({
  width: "107px",
  height: "53px",
  backgroundColor: theme.custom.accent,
  color: "white",
  borderRadius: 100,
}));

const LogOutButton = styled(Button)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "600",
  color: theme.custom.gray,
  borderRadius: 100,
}));

const Mypage = styled(Button)(({ theme }) => ({
  width: "107px",
  height: "53px",
  backgroundColor: theme.custom.primary,
  color: "white",
  borderRadius: 100,
}));
