import Header from "../components/header";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../atom/userState";
import { Button } from "@mui/material";
import { useGoogleAuth } from "../api/auth/googleAuth";
import AuthRequired from "../components/auth/AuthRequired";

export default function Home(): JSX.Element {
  return (
    <AuthRequired>
      <Header />
    </AuthRequired>
  );
}
