import { NextComponentType } from "next";
import FridgeItem from "./FridgeItem";
import { useGetAllFridges } from "@api/hooks/fridge";
import { ContentWrapper } from "./style";
import { useCallback } from "react";
import { useRouter } from "next/router";

const FridgeList = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetAllFridges();
  const router = useRouter();
  const handleOnClickItem = useCallback(
    (id) => {
      router.push(`/map?id=${id}`);
    },
    [router, id]
  );

  if (isLoading) return <></>;
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
