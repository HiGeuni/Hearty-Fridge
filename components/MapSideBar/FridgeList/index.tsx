import { NextComponentType } from "next";
import FridgeItem from "./FridgeItem";
import { useGetAllFridges } from "@api/hooks/fridge";
import { ContentWrapper } from "./style";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Loading from "@components/Loading";

const FridgeList = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetAllFridges();
  const router = useRouter();
  const handleOnClickItem = useCallback(
    (id: number) => {
      router.push(`/map?id=${id}`);
    },
    [router, id]
  );

  if (isLoading) return <Loading />;

  return (
    <ContentWrapper>
      {data &&
        data.fridgeList.map((d) => (
          <FridgeItem
            activate={parseInt(id) === d.fridgeInfo.fridgeId}
            key={d.fridgeInfo.fridgeId}
            data={d}
            onClick={() => handleOnClickItem(d.fridgeInfo.fridgeId)}
          />
        ))}
    </ContentWrapper>
  );
};

export default FridgeList;
