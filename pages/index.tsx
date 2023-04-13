import Header from "@components/Header";
import AuthRequired from "@components/auth/AuthRequired";
import { getAllFridge, getFridgeById } from "@api/fridges";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <div>This is homepage</div>
    </>
  );
}
