import Header from "@components/header";
import AuthRequired from "@components/auth/AuthRequired";
import { getFridgeById } from "@api/fridges";

export default function Intro(): JSX.Element {
  return (
    <AuthRequired>
      <Header />
    </AuthRequired>
  );
}