import { getFridgeById } from "@api/fridges";
import AuthRequired from "@components/auth/AuthRequired";
import Header from "@components/header";
import { useGetAllFridges, useGetFridgeById } from "@api/hooks/fridge";

export default function Map(): JSX.Element {
  const { data: dataAll, refetch } = useGetAllFridges();
  const { data: dataOne, refetch: refetchOne } = useGetFridgeById({ id: 363 });
  console.log("data: ", dataOne);

  return (
    <AuthRequired>
      <Header />
      <div>This is MapPage</div>
    </AuthRequired>
  );
}
