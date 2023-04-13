import Header from "@components/Header";
import AuthRequired from "@components/auth/AuthRequired";
import { getFridgeById } from "@api/fridges";

export default function Intro(): JSX.Element {
  return (
    <>
      <Header />
    </>
  );
}
